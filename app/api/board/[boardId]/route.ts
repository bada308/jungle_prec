import { NextResponse } from 'next/server';

// NOTE: 게시글 조회
export async function GET(request: Request) {
    const data = {
        boardId: '65f9bd2bc30889e1648aefee',
        title: '제목입니다.',
        content: '내용입니다. 내용입니다. 내용입니다.',
        createdAt: '1718873200000',
        comments: [
            {
                commentId: '65f9bd2bc30889e1648aefee',
                comment: '댓글입니다.',
                createdAt: '1718873200000',
                author: {
                    userId: '0987654321',
                    username: '댓글 작성자',
                },
            },
            {
                commentId: '65f9bd2bc30889e1648aefee',
                comment: '댓글입니다.',
                createdAt: '1718873200000',
                author: {
                    userId: '0987654321',
                    username: '댓글 작성자',
                },
            },
        ],
    };

    return NextResponse.json({
        result: 'success',
        data: data,
    });
}
