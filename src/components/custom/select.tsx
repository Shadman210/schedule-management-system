import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export type Option = {
    label: string;
    value: string;
    disabled?: boolean;
    metadata?: any;
};

type Props = {
    options: Option[];
    placeholder?: string;
    label?: string;
    className?: string;
    onChange: (value: string) => void;
    value?: string;
};

export const CustomSelect = ({
    options,
    placeholder,
    label,
    className,
    value,
    onChange,
}: Props) => {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className={className}>
                <SelectValue
                    placeholder={placeholder ? placeholder : "Select an item"}
                />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {label ? <SelectLabel>{label}</SelectLabel> : null}
                    {options.map((option) => {
                        return (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
