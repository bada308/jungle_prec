import { NextResponse } from 'next/server';

// NOTE: 회원가입
export async function POST(req: Request) {
    return NextResponse.json({
        result: 'success',
        msg: '회원가입이 완료되었습니다.',
    });
}
