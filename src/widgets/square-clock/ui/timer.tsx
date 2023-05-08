import React, {useState} from 'react';

type TimerProps = {
    time: string
}

const Timer: React.FC<TimerProps> = ({time}) => {
    const [hours, setHours] = useState<string>(() => {
        return "00"
    })
    const [minutes, setMinutes] = useState<string>(() => {
        return "00"
    })

    const onChangeHours = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = e.target.value

        if(time.length > 2) {
            return
        }

        setHours(e.target.value)
    }
    const onMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let time = e.target.value

        if(time.length > 2) {
            return
        }

        setMinutes(time)
    }

    return (
        <div className={'square-clock__timer'}>
            <input type={'text'} value={hours} onChange={onChangeHours}/>
            <div className={'square-clock__timer-delimeter'}>
                <div className={'square-clock__timer-delimeter-circle'}/>
                <div className={'square-clock__timer-delimeter-circle'}/>
            </div>
            <input type={'text'} value={minutes} onChange={onMinuteChange}/>
        </div>
    );
};

export default Timer;