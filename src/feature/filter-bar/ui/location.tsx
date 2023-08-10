import React, {useState} from 'react';

import loc_img from '../assets/loc.png'

type LocationProps = {
    onChangeLocation: (location: string) => void
}

const Location = ({onChangeLocation}: LocationProps) => {
    const [loc, setLoc] = useState<string>('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoc(e.target.value)
        onChangeLocation(e.target.value)
    }

    return (
        <div className={'filter-bar__location'}>
            <input
                value={loc}
                onChange={onChange}
                placeholder={'Место'}
            />
            <img src={loc_img} alt={'loc'}/>
        </div>
    );
};

export default Location;