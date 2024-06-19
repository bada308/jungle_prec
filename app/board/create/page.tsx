import Button from '@/components/Button';
import Header from '@/components/Header';
import BoardCreateForm from '@/features/board/components/create/BoardCreateForm';
import Image from 'next/image';

const BoardCreatePage = () => {
    return (
        <>
            <Header>
                <HeaderContent />
            </Header>
            <div className="w-[1000px] h-full mt-20 bg-white">
                <BoardCreateForm />
            </div>
        </>
    );
};

const HeaderContent = () => {
    return (
        <>
            <Image src="/icons/arrow_left.svg" width={28} height={28} alt="뒤로가기" className="cursor-pointer" />
            <Button color="blue" size="md">
                제출하기
            </Button>
        </>
    );
};

export default BoardCreatePage;
