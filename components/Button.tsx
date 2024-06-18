import clsx from 'clsx';

type Color = 'black' | 'white' | 'blue' | 'gray';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    color: Color;
    size: Size;
}

const colorClass = {
    black: 'text-white bg-black border-black',
    white: 'text-black bg-white border-lightGray',
    blue: 'text-white bg-blue border-blue',
    gray: 'text-darkGray bg-opacity-0 border-opacity-0',
};

const sizeClass = {
    sm: 'w-20 py-2 text-sm',
    md: 'w-28 py-3 text-base',
    lg: 'w-80 py-3 font-base font-bold text-lg',
};

const Button = ({ color, size, children }: ButtonProps) => {
    const buttonClass = clsx('rounded-lg border flex justify-center items-center', colorClass[color], sizeClass[size]);
    return <button className={buttonClass}>{children}</button>;
};

export default Button;
