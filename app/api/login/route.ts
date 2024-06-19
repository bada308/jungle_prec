import { NextResponse } from 'next/server';

// NOTE: 댓글 생성
export async function POST(req: Request) {
    const { userId, password } = await req.json();
    const data = {
        msg: '로그인이 성공적으로 완료되었습니다.',
        sessionId: 'your-session-id', // 세션 ID를 클라이언트에 전달
    };
    return NextResponse.json(data);
}
