import React, { useEffect } from 'react';
import classes from './Select.module.scss';
import Dropdown from './Dropdown';
import classNames from 'classnames';
import { GoTriangleDown } from 'react-icons/go';
import SelectLabel from './SelectLabel';
import HelperText from '@/components/Select/HelperText';

interface SelectProps {
    variant?: 'outlined' | 'filled' | 'standard';
    sz?: 'small' | 'standard';
    selectedTitle?: string;
    label?: string;
    helperText?: string;
    disabled?: boolean;
    error?: boolean;
    required?: boolean;
    children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
    variant = 'outlined',
    sz,
    selectedTitle,
    label,
    helperText,
    disabled,
    error,
    required,
    children,
}) => {
    const isDisabled = Boolean(disabled);
    const isError = Boolean(error);
    const [isOpen, setIsOpen] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

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

    const selectGroupClasses = classNames(
        classes.selectGroup,
        classes[variant],
        isDisabled && classes.disabled,
        isError && classes.error
    );
    const selectClasses = classNames(
        classes.select,
        selectedTitle && classes.valid,
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
            {isOpen && <Dropdown>{children}</Dropdown>}
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
