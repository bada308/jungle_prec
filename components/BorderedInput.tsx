import { ComponentProps } from 'react';
import Input from './Input';

interface BorderedInputProps extends ComponentProps<'input'> {
    id: string;
    label?: string;
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    children?: React.ReactNode;
}

const BorderedInput = ({ id, label, value, setValue, placeholder, children, type = 'text' }: BorderedInputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label htmlFor={id} className="text-gray">
                    {label}
                </label>
            )}
            <div className="w-full flex gap-1 h-fit items-center">
                <div className="border-2 border-gray rounded-lg px-4 py-3 w-full">
                    <Input id={id} value={value} setValue={setValue} placeholder={placeholder} type={type} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default BorderedInput;
