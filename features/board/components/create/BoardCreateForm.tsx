'use client';

import Textarea from '@/components/Textarea';
import UnderlineInput from '@/components/UnderlineInput';
import { useState } from 'react';

const BoardCreateForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <div className="flex flex-col gap-8 p-9 h-full">
            <UnderlineInput
                id="board-title"
                label="제목"
                placeholder="제목"
                value={title}
                setValue={(v) => setTitle(v)}
                type="title"
            />
            <Textarea
                id="board-content"
                placeholder="내용을 입력해주세요"
                text={content}
                setText={(v) => setContent(v)}
            />
        </div>
    );
};

export default BoardCreateForm;
