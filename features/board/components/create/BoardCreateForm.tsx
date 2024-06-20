'use client';

import Button from '@/components/Button';
import Textarea from '@/components/Textarea';
import UnderlineInput from '@/components/UnderlineInput';
import { useForm } from 'react-hook-form';
import { postBoard } from '../../apis/postBoard';
import { useRouter } from 'next/navigation';

interface BoardCreateInfo {
    title: string;
    content: string;
}

const BoardCreateForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<BoardCreateInfo>();

    const onSubmit = (data: BoardCreateInfo) => {
        postBoard(data).then((boardId) => {
            if (boardId) {
                alert('게시글이 성공적으로 등록되었습니다.');
                router.replace(`/board/detail/${boardId}`);
            } else {
                alert('게시글 등록에 실패했습니다.');
            }
        });
    };

    return (
        <form className="flex flex-col gap-8 p-9 h-full" onSubmit={handleSubmit(onSubmit)}>
            <UnderlineInput name="title" label="제목" placeholder="제목" type="title" register={register} required />
            <Textarea name="content" placeholder="내용을 입력해주세요" register={register} />
            <div className="flex justify-end">
                <Button color="blue" size="md" type="submit">
                    제출하기
                </Button>
            </div>
        </form>
    );
};

export default BoardCreateForm;
