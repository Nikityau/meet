import React from 'react';
import {useEventStore} from "../zustand";
import {v4} from "uuid";

const EventDescrBot = () => {

    const {data} = useEventStore()

    const textNormalize = (): JSX.Element[] => {
        const text: JSX.Element[] = []

        const descr = data.description

        let dotCount = 0
        let fromI = 0;
        for (let i = 0; i < descr.length; ++i) {
            if (descr[i] == '.') {
                dotCount += 1
            }

            if (dotCount >= 2) {
                text.push(
                    <div key={v4()}>
                        {
                            descr.slice(fromI, i + 1)
                        }
                    </div>
                )

                dotCount = 0
                fromI = i + 1;
            }

            if (i == descr.length - 1 && dotCount == 1) {
                text.push(
                    <div>
                        {
                            descr.slice(fromI)
                        }
                    </div>
                )
            }
        }

        return text
    }

    return (
        <div className={'event-descr-bot'}>
            <div className={'event-descr-bot__container'}>
                {
                    data && textNormalize()
                }
            </div>
        </div>
    );
};

export default EventDescrBot;