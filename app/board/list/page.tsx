import Button from '@/components/Button';
import Header from '@/components/Header';
import UserInfo from '@/components/UserInfo';
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
            <div className="flex flex-1 flex-col w-[1000px] mt-16 bg-white h-fit">
                <BoardList boardList={boardList} />
            </div>
        </>
    );
};

const HeaderContent = () => {
    return (
        <div className="flex gap-4 items-center">
            <UserInfo username="강바다" />
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
