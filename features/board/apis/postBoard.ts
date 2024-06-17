import { https } from '@/apis/instance';
import { BoardSimpleInfo } from '../types';

export const postBoard = async (boardInfo: BoardSimpleInfo) => {
    const { data } = await https.post('/board', boardInfo);
    return data?.boardId;
};
