import { getBoardList } from '@/features/board';
import { BoardInfoDto } from '@/features/board/apis/dtos';
import BoardList from '@/features/board/components/list/BoardList';
import React from 'react';

const BoardListPage = async () => {
    const boardList: BoardInfoDto[] = await getBoardList();
    return (
        <>
            <BoardList boardList={boardList} />
        </>
    );
};

export default BoardListPage;
