import React, {useState} from 'react';

type CommentProps = {
    eventId: string
}

const Comment = ({eventId}: CommentProps) => {

    const [com, setCom] = useState<string>("")

    return (
        <div className={'user-comment__comment'}>
            <input
                value={com}
                placeholder={'Написать комментарий....'}
                onChange={(e) => {
                    setCom(e.target.value)
                }}
            />
            <div className={'user-comment__btn'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="34" viewBox="0 0 35 34" fill="none">
                    <path d="M10.9231 6.04011C10.6584 5.95422 10.3728 6.03746 10.1794 6.25689C9.98602 6.47631 9.91601 6.79654 9.99708 7.09082L12.4294 15.9193H20.9451C21.3593 15.9193 21.6951 16.2943 21.6951 16.757C21.6951 17.2196 21.3593 17.5946 20.9451 17.5946H12.4294L9.99717 26.4228C9.9161 26.7171 9.98612 27.0373 10.1795 27.2567C10.3729 27.4762 10.6585 27.5594 10.9232 27.4735C17.6218 25.3001 23.8425 21.8736 29.3684 17.4368C29.5644 17.2794 29.6806 17.0263 29.6806 16.7567C29.6806 16.4871 29.5644 16.2339 29.3684 16.0766C23.8425 11.6398 17.6218 8.21337 10.9231 6.04011Z" fill="#5C4EFE"/>
                </svg>
            </div>
        </div>
    );
};

export default Comment;