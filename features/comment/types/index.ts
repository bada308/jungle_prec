import { AuthorInfo } from '@/types';

export interface CommentInfo {
    commentId: string;
    comment: string;
    createdAt: string;
    author: AuthorInfo;
}
