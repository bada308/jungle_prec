import { CommentInfo } from '../types';

export class CommentInfoDto {
    public readonly commentId: string;
    public readonly comment: string;
    public readonly createdAt: string;
    public readonly author: {
        userId: string;
        username: string;
    };

    constructor(data: CommentInfo) {
        this.commentId = data.commentId;
        this.comment = data.comment;
        this.createdAt = data.createdAt;
        this.author = {
            userId: data.author.userId,
            username: data.author.username,
        };
    }
}
