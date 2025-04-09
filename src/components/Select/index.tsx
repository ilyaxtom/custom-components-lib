import React, { useRef, useEffect, useMemo } from 'react';
import classes from './Select.module.scss';
import Dropdown, { Option } from './Dropdown';
import classNames from 'classnames';
import { GoTriangleDown } from 'react-icons/go';

interface SelectProps {
    variant?: 'outlined' | 'filled' | 'standard';
    options?: Option[];
    selectedId?: number;
    onChange?: (id: number) => void;
    label?: string;
    helperText?: string;
    size?: 'small' | 'standard';
    disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
    variant = 'outlined',
    options,
    selectedId,
    onChange,
    label,
    helperText,
    size,
    disabled,
}) => {
    const isDisabled = disabled !== undefined;
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
        if (isDisabled) return;
        setIsOpen(!isOpen);
        setIsFocused(true);
    };

    const selectOption = (id: number) => {
        if (!onChange) {
            setSelected(id);
        }
        onChange?.(id);
    };

    const selectGroupClasses = `${classes.selectGroup} ${classes[variant]} ${classes.disabled}`;
    const selectClasses = classNames(
        classes.select,
        selectedTitle.length !== 0 && classes.valid,
        isFocused && classes.focus,
        size === 'small' && classes.small
    );
    const labelClasses = classNames(
        classes.label,
        isDisabled && classes.disabled
    );
    const iconClasses = classNames(
        classes.inputIcon,
        isDisabled && classes.disabled
    );
    const helperTextClasses = classNames(
        classes.helperText,
        isDisabled && classes.disabled
    );

    return (
        <div ref={ref} className={selectGroupClasses} onClick={toggleDropdown}>
            <div className={selectClasses}>
                <span className={classes.inputText}>{selectedTitle}</span>
                <GoTriangleDown className={iconClasses} />
            </div>
            {label && <label className={labelClasses}>{label}</label>}
            {isOpen && (
                <Dropdown
                    options={options}
                    selectFn={selectOption}
                    selectedId={selectedId}
                />
            )}
            {helperText && (
                <div className={helperTextClasses}>{helperText}</div>
            )}
        </div>
    );
};

export default Select;
