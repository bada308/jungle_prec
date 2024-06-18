import Input from './Input';

interface UnderlineInputProps {
    id: string;
    label: string;
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
}

const UnderlineInput = ({ id, label, value, setValue, placeholder }: UnderlineInputProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor={id} className="text-gray">
                {label}
            </label>
            <div className="border-b-2 border-gray p-3 w-full">
                <Input id={id} value={value} setValue={setValue} placeholder={placeholder} />
            </div>
        </div>
    );
};

export default UnderlineInput;
