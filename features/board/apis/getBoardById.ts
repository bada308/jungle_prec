import { https } from '@/apis/instance';
import { CommentInfoDto } from '@/features/comment';
import { BoardInfoDto } from './dtos';
import { CommentInfo } from '@/features/comment/types';

export const getBoardById = async (boardId: string) => {
    const { data } = await https.get(`/board/${boardId}`);
    return {
        boardInfo: new BoardInfoDto(data?.boardInfo),
        comments: data?.comments?.map((comment: CommentInfo) => new CommentInfoDto(comment)),
    };
};
