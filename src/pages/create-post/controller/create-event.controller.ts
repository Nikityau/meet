import {Subject} from "rxjs";

import {EventSpecKeyType, EventStage, EventHookStageHandler, StatusObject, Unsub} from "./type/type";

export class CreateEventController<T> {
    private static instance: CreateEventController<any> = null

    private readonly eventStages: EventStage<T>[]

    private eventStagesStatus: Record<string, StatusObject> = {}

    private eventState: Record<string, any> = {}

    private eventStageHookHandlers: Map<string, Subject<any>>

    private eventStageServices: Record<string, IEventStageService> = {}

    private globalStatus: StatusObject = {
        error: false,
        status: 'process'
    }

    constructor(eventStages: EventStage<T>[]) {
        this.eventStageHookHandlers = new Map<string, Subject<EventHookStageHandler>>()

        this.eventStages = eventStages
        this.buildStatusObj()
        this.buildStateObj()
    }

    private buildStatusObj() {
        this.eventStages.forEach(stage => {
            this.eventStagesStatus[`${stage.uniqueName.toString()}`] = {
                status: 'wait',
                error: false,
                number: stage.number
            }
        })
    }

    private buildStateObj() {
        this.eventStages.forEach(stage => {
            this.eventState[`${stage.uniqueName.toString()}`] = null
        })
    }


    private saveToLocalStorage() {
        const jsonEventState = JSON.stringify(this.eventState)
        const jsonEventStatus = JSON.stringify(this.eventStagesStatus)

        localStorage.setItem('create-event-state', jsonEventState)
        localStorage.setItem('create-event-status', jsonEventStatus)
    }

    private loadFromLocalStorage() {
        const eventState = JSON.parse(localStorage.getItem('create-event-state'))
        const eventStatus = JSON.parse(localStorage.getItem('create-event-status'))

        if (!eventStatus || !eventState) {
            return false
        }

        this.eventState = eventState
        this.eventStagesStatus = eventStatus

        return true
    }
    private deleteFromLocalStorage() {
        localStorage.removeItem('create-event-state')
        localStorage.removeItem('create-event-status')
        localStorage.removeItem('content-state')
    }

    start() {
        if(!this.loadFromLocalStorage()) {
            const stagesStatus = this.eventStagesStatus
            for (let i in stagesStatus) {
                if (stagesStatus[i].number == 1) {
                    stagesStatus[i].status = 'process'
                } else {
                    break
                }
            }
        }

        this.sendStatusByAll()
    }

    onHookHandler(uniqueName: string, handler: EventHookStageHandler): Unsub {
        if (!this.eventStageHookHandlers.has(uniqueName)) {
            this.eventStageHookHandlers.set(uniqueName, new Subject())
        }

        const unsub = this.eventStageHookHandlers.get(uniqueName).subscribe(handler)
        this.sendStatus(uniqueName)

        return () => {
            unsub.unsubscribe()
        }
    }

    addEventStageService(uniqueName: string, service: IEventStageService) {
        this.eventStageServices[uniqueName] = service
    }

    private setError(key: string, value: boolean) {
        this.eventStagesStatus[key].error = value

        this.sendStatus(key)
        console.log(`${key}: error: ${value}`)
    }

    private checkOnGlobalError() {
        const stagesStatus = this.eventStagesStatus
        for (let i in stagesStatus) {
            if (stagesStatus[i].error) {
                this.globalStatus.error = true
                return
            }
        }

        this.globalStatus.error = false
    }

    private checkError() {
        const stagesStatus = this.eventStagesStatus

        for (let i in stagesStatus) {
            if (stagesStatus[i].status == 'done' ||
                stagesStatus[i].status == 'process'
            ) {
                const valueStageState = this.eventState[i]
                const res = this.eventStageServices[i]?.checkError(valueStageState)

                this.setError(i, res == undefined ? true : res)
            }
        }

    }

    private sendStatusByAll() {
        this.eventStages.forEach(stage => {
            this.sendStatus(stage.uniqueName.toString())
        })
    }

    private sendStatus(uniqueName: string) {
        this.eventStageHookHandlers.get(uniqueName)?.next(this.eventStagesStatus[uniqueName])
    }

    private setStateValue(key: string, value: any) {
        this.eventState[key] = value

        console.log(value)
    }

    nextStage() {
        this.checkError()
        this.checkOnGlobalError()

        if (this.globalStatus.error) {
            console.log('gb error', this.globalStatus.error)
            return
        }

        if (this.globalStatus.status == 'done') {
            this.finishCreateEvent()
            return;
        }

        const stagesStatus = this.eventStagesStatus
        let currentStage: StatusObject = null
        for (let i in stagesStatus) {
            if (stagesStatus[i].status == 'process') {
                currentStage = stagesStatus[i]
                break
            }
        }

        currentStage!.status = 'done'


        const allStages = this.eventStages
        if (currentStage!.number == allStages[allStages.length - 1].number) {
            this.globalStatus.status = 'done'
        } else {
            for (let i in stagesStatus) {
                if (stagesStatus[i].number == currentStage!.number + 1) {
                    stagesStatus[i].status = 'process'
                    break
                }
            }
        }

        this.sendStatusByAll()
        this.saveToLocalStorage()
    }

    private finishCreateEvent() {
        // make request
    }

    createEvent(key: string | EventSpecKeyType, value: any) {
        if (this.eventStageServices[key].checkError(value)) {
            this.setStateValue(key, null)
            //this.setError(key, true);
            //this.checkError();
            //this.checkOnGlobalError();
            this.saveToLocalStorage()

            return
        } else {
            this.setStateValue(key, value)
            this.setError(key, false)
            this.saveToLocalStorage()
        }

        if (key == 'next') {
            this.nextStage()
        }
        if (key == 'finish') {
            this.finishCreateEvent()
        }
    }

    getStagesEvent() {
        return this.eventStages
    }

    getStateByKey(key: string): any {
        return this.eventState[key]
    }

    static INIT<T>(eventStages: EventStage<T>[]) {
        if (CreateEventController.instance == null) {
            CreateEventController.instance = new CreateEventController(eventStages)
        }

        return CreateEventController.instance
    }

    static GET() {
        return CreateEventController.instance
    }
}