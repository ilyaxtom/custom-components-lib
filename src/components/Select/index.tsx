import React, { useRef, useEffect, useMemo } from 'react';
import classes from './Select.module.scss';
import Dropdown, { Option } from './Dropdown';
import classNames from 'classnames';

interface SelectProps {
    variant?: 'outlined' | 'filled' | 'standard';
    options?: Option[];
    selectedId?: number;
    onChange?: (id: number) => void;
}

const Select: React.FC<SelectProps> = ({
    variant = 'outlined',
    options,
    selectedId,
    onChange,
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<number | null>(
        selectedId ?? null
    );
    const [isFocused, setIsFocused] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    const selectedTitle = useMemo(() => {
        const option = options.find((o) => o.id === selectedId);
        return option ? option.title : '';
    }, [options, selectedId]);

    useEffect(() => {
        const handleClick = (event: Event) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
                setIsFocused(false);
            }
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsFocused(true);
    };

    const selectOption = (id: number) => {
        if (!onChange) {
            setSelected(id);
        }
        onChange?.(id);
    };

    const selectGroupClasses = `${classes.selectGroup} ${classes[variant]}`;
    const selectClasses = classNames(
        classes.select,
        selectedTitle.length !== 0 && classes.valid,
        isFocused && classes.focus
    );

    return (
        <div ref={ref} className={selectGroupClasses} onClick={toggleDropdown}>
            <div className={selectClasses}>{selectedTitle}</div>
            <label className={classes.label}>Age</label>
            {isOpen && (
                <Dropdown
                    options={options}
                    selectFn={selectOption}
                    selectedId={selectedId}
                />
            )}
        </div>
    );
};

export default Select;
