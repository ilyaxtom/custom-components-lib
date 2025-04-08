import React from 'react';
import classes from './Dropdown.module.scss';

export interface Option {
    id: number;
    title: string;
}

interface DropdownProps {
    options: Option[];
    selectFn: (id: number) => void;
    selectedId: number;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    selectedId,
    selectFn,
}) => {
    const optionsList = options.map(({ id, title }) => {
        const optionClasses = `${classes.dropdownItem} ${id === selectedId && classes.selected}`;

        return (
            <div
                key={id}
                className={optionClasses}
                onClick={() => selectFn(id)}
            >
                {title}
            </div>
        );
    });

    return <div className={classes.dropdown}>{optionsList}</div>;
};

export default Dropdown;
