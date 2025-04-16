import React from 'react';
import classes from '@/components/Select/SelectItem/SelectItem.module.scss';

interface SelectItemProps<T> {
    id: T;
    selected: boolean;
    onChange: (id: T) => void;
    children?: React.ReactNode;
}

const SelectItem = <T,>({
    id,
    selected,
    onChange,
    children,
}: SelectItemProps<T>) => {
    const optionClasses = `${classes.selectItem} ${selected ? classes.selected : ''}`;

    const handleClick = () => {
        onChange(id);
    };

    return (
        <div className={optionClasses} onClick={handleClick}>
            {children}
        </div>
    );
};

export default SelectItem;
