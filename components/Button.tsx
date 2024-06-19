import clsx from 'clsx';

type Color = 'black' | 'white' | 'blue' | 'gray';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    color: Color;
    size: Size;
}

const colorClass = {
    black: 'text-white bg-black border-black',
    white: 'text-black bg-white border-lightGray hover:bg-blue hover:text-white hover:border-blue',
    blue: 'text-white bg-blue border-blue hover:bg-opacity-70 border-opacity-70',
    gray: 'text-darkGray border-opacity-0 border-white hover:border-darkGray',
};

const sizeClass = {
    sm: 'w-20 py-2 text-sm',
    md: 'w-28 py-3 text-base',
    lg: 'w-80 py-3 font-base font-bold text-lg',
};

const Button = ({ color, size, children }: ButtonProps) => {
    const buttonClass = clsx(
        'rounded-lg border-[1.5px] flex justify-center items-center  transition-colors duration-300 ease-in-out',
        colorClass[color],
        sizeClass[size],
    );
    return <button className={buttonClass}>{children}</button>;
};

export default Button;
