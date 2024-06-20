'use client';

import BorderedInput from '@/components/BorderedInput';
import Button from '@/components/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CommentEditor = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => {
        alert(JSON.stringify(data));
    };
    const onCreate = () => {
        if (errors.comment) {
            alert('댓글을 입력해주세요.');
            return;
        }
    };
    const onDecline = () => {
        alert('취소되었습니다.');
        reset();
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <BorderedInput
                name="comment"
                placeholder="댓글을 입력해주세요."
                register={register}
                required="댓글을 입력해주세요."
            />
            <div className="flex gap-2 justify-end">
                <Button color="gray" size="sm" onClick={() => onDecline()}>
                    취소
                </Button>
                <Button color="blue" size="sm" type="submit" onClick={() => onCreate()}>
                    작성
                </Button>
            </div>
        </form>
    );
};

export default CommentEditor;
