import { BoardInfo } from '../types';
import { BoardInfoDto } from './dtos';

export const getBoardList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_LOCAL}/board`, {
        method: 'GET',
    });
    console.log(res);
    const { data } = await res.json();
    return data?.map((board: BoardInfo) => new BoardInfoDto(board));
};
