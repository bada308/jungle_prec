import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// NOTE: 게시글 리스트 조회
export async function GET(req: Request) {
    const words = ['너구리', '세바스찬', '뽀야미', '푸바오', '문대'];
    const data = Array(5)
        .fill(null)
        .map((_, index) => ({
            boardId: uuidv4(),
            title: `${words[Math.floor(Math.random() * words.length)]} 초대하기.`,
            content: `안녕하세요.${index + 1} 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅! 안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!안녕하세요. 게시판 만들기 과제를 하고 있어요. 아자아자 화이팅!.`,
            createdAt: '1718873200000',
            author: {
                userId: uuidv4(),
                username: ['애플', '사이다', '쭈니', '잭슨', '차둘'][index],
            },
        }));

    return NextResponse.json({ result: 'success', data: data });
}
