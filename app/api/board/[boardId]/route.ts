import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// NOTE: 게시글 조회
export async function GET(request: Request) {
    const data = {
        boardId: uuidv4(),
        title: '제목입니다.',
        content: '내용입니다. 내용입니다. 내용입니다.',
        createdAt: '1718873200000',
        author: {
            userId: uuidv4(),
            username: '뽀야미',
        },
        comments: Array(4)
            .fill(null)
            .map((_, index) => ({
                commentId: uuidv4(),
                comment: '댓글입니다.',
                createdAt: '1718873200000',
                author: {
                    userId: uuidv4(),
                    username: ['애플', '사이다', '쭈니', '잭슨'][index],
                },
            })),
    };

    return NextResponse.json({
        result: 'success',
        data: data,
    });
}
