import { https } from '@/apis/instance';
import { BoardInfo } from '../types';
import { BoardInfoDto } from './dtos';

export const getBoardList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/board`, {
        method: 'GET',
    });
    const { data } = await res.json();
    // console.log(data);
    return data?.map((board: BoardInfo) => new BoardInfoDto(board));
};
