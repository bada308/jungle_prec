'use client';

import BorderedInput from '@/components/BorderedInput';
import Button from '@/components/Button';
import { useState } from 'react';

const CommentEditor = () => {
    const [comment, setComment] = useState('');
    return (
        <div className="flex flex-col gap-4">
            <BorderedInput
                id="comment"
                placeholder="댓글을 입력해주세요."
                value={comment}
                setValue={(v) => setComment(v)}
            />
            <div className="flex gap-2 justify-end">
                <Button color="gray" size="sm">
                    취소
                </Button>
                <Button color="blue" size="sm">
                    작성
                </Button>
            </div>
        </div>
    );
};

export default CommentEditor;
