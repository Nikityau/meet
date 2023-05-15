import React, {useMemo} from 'react';

type TimeArrowProps = {
    time: string
}

const TimeArrow: React.FC<TimeArrowProps> = ({time}) => {

    const degrees = useMemo(() => {
        if(!time) return 0

        const h = Number.parseInt(time.split(':')[0])

        return 90 + h * 30
    }, [time])

    return (
        <div className={'time-arrow'}
            style={{
                transform: `translate(-100%, -50%) rotateZ(${degrees}deg)`
            }}
        >
        </div>
    );
};

export default TimeArrow;