'use client';

import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
}

const Input = ({ type, value, setValue, placeholder }: InputProps) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-fit placeholder:text-darkGray outline-none"
            placeholder={placeholder}
        />
    );
};

export default Input;
