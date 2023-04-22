import React from 'react';

import './style/index.scss'

type MessageMiniProps = {
    id: string
}

const MessageMini: React.FC<MessageMiniProps> = ({id}) => {
    return (
        <div className={'messages-mini'}>

        </div>
    );
};

export default MessageMini;