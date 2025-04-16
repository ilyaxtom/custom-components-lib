import React, { useEffect, useMemo } from 'react';
import classes from './Select.module.scss';
import Dropdown, { Option } from './Dropdown';
import classNames from 'classnames';
import { GoTriangleDown } from 'react-icons/go';
import SelectLabel from './SelectLabel';
import HelperText from '@/components/Select/HelperText';

interface SelectProps {
    variant?: 'outlined' | 'filled' | 'standard';
    sz?: 'small' | 'standard';
    options?: Option[];
    selectedId?: number;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    required?: boolean;
    onChange?: (id: number) => void;
}

const Select: React.FC<SelectProps> = ({
    variant = 'outlined',
    sz,
    options,
    selectedId,
    label,
    helperText,
    disabled,
    error,
    required,
    onChange,
}) => {
    const isDisabled = Boolean(disabled);
    const isError = Boolean(error);
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState<number | null>(
        selectedId ?? null
    );
    const [isFocused, setIsFocused] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    const selectedTitle = useMemo(() => {
        const option = options.find((o) => o.id === selected);
        return option ? option.title : '';
    }, [options, selected]);

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

    const selectGroupClasses = classNames(
        classes.selectGroup,
        classes[variant],
        isDisabled && classes.disabled,
        isError && classes.error
    );
    const selectClasses = classNames(
        classes.select,
        selectedTitle.length !== 0 && classes.valid,
        isFocused && classes.focus,
        sz === 'small' && classes.small
    );
    const iconClasses = classNames(
        classes.inputIcon,
        isDisabled && classes.disabled,
        isError && classes.error
    );

    return (
        <div
            data-testid="select"
            ref={ref}
            className={selectGroupClasses}
            onClick={toggleDropdown}
        >
            <div className={selectClasses}>
                <span className={classes.inputText}>{selectedTitle}</span>
                <GoTriangleDown className={iconClasses} />
            </div>
            {label && (
                <SelectLabel
                    text={label}
                    isDisabled={isDisabled}
                    isError={isError}
                    required={required}
                />
            )}
            {isOpen && (
                <Dropdown
                    options={options}
                    selectFn={selectOption}
                    selectedId={selected}
                />
            )}
            {helperText && (
                <HelperText
                    text={helperText}
                    isDisabled={isDisabled}
                    isError={isError}
                />
            )}
        </div>
    );
};

export default Select;
