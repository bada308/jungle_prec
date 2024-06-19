import clsx from 'clsx';
import Input from './Input';
import Title from './Title';

interface UnderlineInputProps {
    id: string;
    label: string;
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    type?: UnderlineInputType;
}

type UnderlineInputType = 'default' | 'title';

const typeClass = {
    default: 'p-3',
    title: 'text-black text-2xl font-bold p-6',
};

const UnderlineInput = ({ id, label, value, setValue, placeholder, type = 'default' }: UnderlineInputProps) => {
    const UnderlineInputClass = clsx('border-b-2 border-gray w-full', typeClass[type]);
    return (
        <div className="flex flex-col gap-2 w-full">
            {type === 'default' && (
                <label htmlFor={id} className="text-gray">
                    {label}
                </label>
            )}
            <div className={UnderlineInputClass}>
                <Input id={id} value={value} setValue={setValue} placeholder={placeholder} />
            </div>
        </div>
    );
};

export default UnderlineInput;
