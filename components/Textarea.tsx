import { ComponentProps } from 'react';

interface TextareaProps extends ComponentProps<'textarea'> {
    text: string;
    setText: (text: string) => void;
    placeholder?: string;
}

const Textarea = ({ text, setText, placeholder }: TextareaProps) => {
    return (
        <textarea
            className="resize-none w-full outline-none font-Pretendard h-full px-3 py-6 placeholder:text-darkGray"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder ?? 'Type something here...'}
        />
    );
};

export default Textarea;
