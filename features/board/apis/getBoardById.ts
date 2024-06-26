import { CommentInfoDto } from '@/features/comment';
import { BoardInfoDto } from './dtos';
import { CommentInfo } from '@/features/comment/types';

export const getBoardById = async (boardId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_LOCAL}/board/${boardId}`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': `application/json`,
            'ngrok-skip-browser-warning': '69420',
        },
    });
    const { data } = await res.json();
    return {
        boardInfo: new BoardInfoDto(data),
        comments: data?.comments?.map((comment: CommentInfo) => new CommentInfoDto(comment)),
    };
};
