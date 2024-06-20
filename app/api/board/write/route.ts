import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// NOTE: 게시글 생성
export async function POST(req: Request) {
    const { title, content } = await req.json();
    const data = {
        boardId: uuidv4(),
        title,
        content,
    };

    return NextResponse.json({
        result: 'success',
        data: data,
    });
}
