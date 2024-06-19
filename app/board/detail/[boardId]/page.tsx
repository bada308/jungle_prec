import Header from '@/components/Header';
import UserInfo from '@/components/UserInfo';
import BoardHeader from '@/features/board/components/detail/BoardHeader';
import BoardInfo from '@/features/board/components/detail/BoardInfo';
import Image from 'next/image';
import React from 'react';

const BoardDetailPage = () => {
    return (
        <>
            <Header>
                <HeaderContent />
            </Header>
            <div className="w-[1000px] h-full mt-20 bg-white">
                <BoardInfo />
            </div>
        </>
    );
};

const HeaderContent = () => {
    return (
        <>
            <Image src="/icons/arrow_left.svg" width={28} height={28} alt="뒤로가기" className="cursor-pointer" />
            <UserInfo username="강바다" />
        </>
    );
};

export default BoardDetailPage;
