import { BoardSimpleInfo } from '../types';

export const postBoard = async (boardInfo: BoardSimpleInfo) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_LOCAL}/board/write`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(boardInfo),
        headers: {
            'Content-Type': `application/json`,
            'ngrok-skip-browser-warning': '69420',
        },
    });

    const { data } = await res.json();
    return data?.boardId;
};
