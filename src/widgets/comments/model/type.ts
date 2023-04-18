export interface IComment {
    id: string,
    userImage: string,
    userFullName: string,
    comment: string
}

export interface IUserComment {
    onComment: (comment: IComment) => void
}