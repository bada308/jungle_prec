import { ComponentProps } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface TextareaProps extends ComponentProps<'textarea'> {
    name: string;
    register: UseFormRegister<any>;
    placeholder?: string;
}

const Textarea = ({ name, register, placeholder }: TextareaProps) => {
    return (
        <textarea
            className="resize-none w-full outline-none font-Pretendard h-full px-3 py-6 placeholder:text-darkGray"
            {...register(name)}
            placeholder={placeholder ?? 'Type something here...'}
        />
    );
};

export default Textarea;
