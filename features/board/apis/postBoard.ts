import { BoardSimpleInfo } from '../types';

export const postBoard = async (boardInfo: BoardSimpleInfo) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_LOCAL}/board`, {
        method: 'POST',
        body: JSON.stringify(boardInfo),
    });

    const { data } = await res.json();
    return data?.boardId;
};
