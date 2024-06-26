import { AuthorInfo } from '@/types';

export interface BoardInfo {
    boardId: string;
    title: string;
    content: string;
    createdAt: string;
    author: AuthorInfo;
}

export interface BoardSimpleInfo extends Pick<BoardInfo, 'title' | 'content'> {}
