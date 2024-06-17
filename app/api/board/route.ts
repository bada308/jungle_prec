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

// NOTE: 게시글 리스트 조회
export async function GET(req: Request) {
    const data = Array(5)
        .fill(null)
        .map((_, index) => ({
            boardId: uuidv4(),
            title: `제목입니다${index + 1}.`,
            content: `내용입니다${index + 1}. 내용입니다${index + 1}. 내용입니다${index + 1}.`,
            createdAt: '1718873200000',
            author: {
                userId: uuidv4(),
                username: ['애플', '사이다', '쭈니', '잭슨', '차둘'][index],
            },
        }));

    return NextResponse.json({ result: 'success', data: data });
}
