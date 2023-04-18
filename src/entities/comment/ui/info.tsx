import React from 'react';

type InfoProps = {
    userName: string,
    comment: string
}
const Info: React.FC<InfoProps> = ({comment, userName}) => {
    return (
        <div className={'comment__info'}>
            <div className={'comment__user-name'}>
                <span>{userName}</span>
            </div>
            <div className={'comment__comment'}>
                <span>{comment}</span>
            </div>
        </div>
    );
};

export default Info;