import Button from '@/components/Button';
import Header from '@/components/Header';
import { getBoardList } from '@/features/board';
import { BoardInfoDto } from '@/features/board/apis/dtos';
import BoardList from '@/features/board/components/list/BoardList';
import Link from 'next/link';
import React from 'react';

const BoardListPage = async () => {
    const boardList: BoardInfoDto[] = await getBoardList();
    return (
        <>
            <Header>
                <div />
                <HeaderContent />
            </Header>
            <div className="w-[880px] mt-8 bg-white">
                <BoardList boardList={boardList} />
            </div>
        </>
    );
};

const HeaderContent = () => {
    return (
        <div className="flex gap-4 items-center">
            <span className="text-darkGray">
                <span className="text-blue">닉네임</span>님 반가워요!
            </span>
            <div>
                <Link href="/board/create">
                    <Button color="white" size="md">
                        새 글 작성
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default BoardListPage;
