import BoardInfo from '@/features/board/components/detail/BoardInfo';
import CommentContainer from '@/features/comment/components/CommentContainer';
import React from 'react';

const BoardDetailPage = () => {
    return (
        <>
            <BoardInfo />
            <CommentContainer />
        </>
    );
};

export default BoardDetailPage;
