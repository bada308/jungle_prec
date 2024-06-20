import { ComponentProps } from 'react';
import Input from './Input';
import { UseFormRegister } from 'react-hook-form';

interface BorderedInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    children?: React.ReactNode;
    register: UseFormRegister<any>;
    required?: boolean | string;
    type?: 'text' | 'password' | 'email' | 'number';
}

const BorderedInput = ({
    name,
    label,
    placeholder,
    children,
    type = 'text',
    register,
    required,
}: BorderedInputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label htmlFor={name} className="text-gray">
                    {label}
                </label>
            )}
            <div className="w-full flex gap-1 h-fit items-center">
                <div className="border-2 border-gray rounded-lg px-4 py-3 w-full">
                    <input
                        id={name}
                        type={type}
                        className="w-full h-fit placeholder:text-darkGray outline-none"
                        placeholder={placeholder}
                        {...register(name, { required })}
                    />
                </div>
                {children}
            </div>
        </div>
    );
};

export default BorderedInput;
