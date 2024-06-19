import clsx from 'clsx';
import { ComponentProps } from 'react';

type Color = 'black' | 'white' | 'blue' | 'gray';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentProps<'button'> {
    color: Color;
    size: Size;
}

const colorClass = {
    black: 'text-white bg-black border-black hover:bg-gray hover:border-gray',
    white: 'text-black bg-white border-lightGray hover:bg-blue hover:text-white hover:border-blue',
    blue: 'text-white bg-blue border-blue hover:bg-opacity-70 border-opacity-70',
    gray: 'text-darkGray border-opacity-0 border-white hover:border-lightGray hover:bg-lightGray hover:text-black',
};

const sizeClass = {
    sm: 'min-w-20 py-2 text-sm',
    md: 'min-w-28 py-3 text-base',
    lg: 'min-w-80 py-3 font-base font-bold text-lg',
};

const Button = ({ color, size, children, onClick }: ButtonProps) => {
    const buttonClass = clsx(
        'rounded-lg border-[1.5px] flex justify-center items-center  transition-colors duration-300 ease-in-out',
        colorClass[color],
        sizeClass[size],
    );
    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
