import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '정글 게시판',
    description: '나만무 준비 기간 게시판 프로젝트',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="font-LineSeedKR">{children}</body>
        </html>
    );
}
