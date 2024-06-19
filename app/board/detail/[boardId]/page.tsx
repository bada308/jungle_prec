import { getBoardById } from '@/features/board';
import BoardInfo from '@/features/board/components/detail/BoardInfo';
import CommentContainer from '@/features/comment/components/CommentContainer';
import React from 'react';

const BoardDetailPage = async ({ params }: { params: { boardId: string } }) => {
    const { boardInfo, comments } = await getBoardById(params.boardId);

    return (
        <>
            <BoardInfo
                title={boardInfo.title}
                content={boardInfo.content}
                author={boardInfo.author.username}
                createdAt={boardInfo.createdAt}
            />
            <CommentContainer comments={comments} />
        </>
    );
};

export default BoardDetailPage;
