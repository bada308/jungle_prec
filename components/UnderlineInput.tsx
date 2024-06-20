import clsx from 'clsx';
import Input from './Input';
import Title from './Title';
import { UseFormRegister } from 'react-hook-form';

interface UnderlineInputProps {
    name: string;
    label: string;
    placeholder?: string;
    register: UseFormRegister<any>;
    required?: boolean | string;
    type?: UnderlineInputType;
}

type UnderlineInputType = 'default' | 'title';

const typeClass = {
    default: 'p-3',
    title: 'text-black text-2xl font-bold p-6',
};

const UnderlineInput = ({ name, label, placeholder, type = 'default', register, required }: UnderlineInputProps) => {
    const UnderlineInputClass = clsx('border-b-2 border-gray w-full', typeClass[type]);
    return (
        <div className="flex flex-col gap-2 w-full">
            {type === 'default' && (
                <label htmlFor={name} className="text-gray">
                    {label}
                </label>
            )}
            <div className={UnderlineInputClass}>
                <input
                    id={name}
                    type={type}
                    className="w-full h-fit placeholder:text-darkGray outline-none"
                    placeholder={placeholder}
                    {...register(name, { required })}
                />
            </div>
        </div>
    );
};

export default UnderlineInput;
