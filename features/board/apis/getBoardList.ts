import { https } from '@/apis/instance';
import { BoardInfo } from '../types';
import { BoardInfoDto } from './dtos';

export const getBoardList = async () => {
    const { data } = await https.get('/board');
    return data?.map((board: BoardInfo) => new BoardInfoDto(board));
};
