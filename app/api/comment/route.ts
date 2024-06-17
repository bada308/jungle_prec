import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// NOTE: 댓글 생성
export async function POST(req: Request) {
    const { boardId, comment } = await req.json();
    const data = {
        commentId: uuidv4(),
        comment,
        createdAt: '1718873200000',
        author: {
            userId: uuidv4(),
            username: '뽀야미',
        },
    };
    return NextResponse.json({ result: 'success', data: data });
}
