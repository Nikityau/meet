import React from 'react';

type InfoBlockProps = {
    ShareBtn,
    Tags,
    LikeBtn,
    CommentBtn,
}

const InfoBlock = (
    {
        CommentBtn,
        LikeBtn,
        Tags,
        ShareBtn
    }: InfoBlockProps) => {
    return (
        <div className={'archive-event-ib'}>
            <div className={'archive-event-ib__i'}>
                {
                    LikeBtn
                }
                {
                    ShareBtn
                }
                {
                    CommentBtn
                }
            </div>
            <div className={'archive-event-ib__tags'}>
                <div className={'archive-event-ib__tags-title'}>
                    <span>Теги</span>
                </div>
                <div className={'archive-event-ib__tags-list'}>
                    {
                        Tags
                    }
                </div>
            </div>
        </div>
    );
};

export default InfoBlock;