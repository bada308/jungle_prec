'use client';

interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
}

const Input = ({ value, setValue, placeholder }: InputProps) => {
    return (
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full h-fit placeholder:text-darkGray outline-none"
            placeholder={placeholder}
        />
    );
};

export default Input;
