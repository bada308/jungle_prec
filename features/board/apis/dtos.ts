import { formatTimestampToDate } from '@/utils/format';
import { BoardInfo } from '../types';

export class BoardInfoDto {
    public readonly boardId: string;
    public readonly title: string;
    public readonly content: string;
    public readonly createdAt: string;
    public readonly author: {
        userId: string;
        username: string;
    };

    constructor(data: BoardInfo) {
        this.boardId = data.boardId;
        this.title = data.title;
        this.content = data.content;
        this.createdAt = formatTimestampToDate(+data.createdAt);
        this.author = {
            userId: data.author.userId,
            username: data.author.username,
        };
    }
}
