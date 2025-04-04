import React from 'react';
import classes from './Checkbox.module.scss';
import classNames from 'classnames';
import Label from './Label';

interface CheckboxProps {
    checked?: boolean;
    label?: string;
    required?: boolean;
    size?: 'small' | 'medium' | 'large';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    color?: 'blue' | 'purple' | 'green' | 'gray' | 'pink';
}

const Checkbox: React.FC<CheckboxProps> = ({
    checked,
    required,
    label,
    size = 'medium',
    onChange,
    disabled,
    color = 'blue',
}) => {
    const [isChecked, setIsChecked] = React.useState(false);
    const isControlled = checked !== undefined;
    const isDisabled = disabled !== undefined;

    const isCheckboxChecked = isControlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        if (!isControlled) {
            setIsChecked(value);
        }
        onChange?.(e);
    };

    const containerClasses = classNames(
        classes.container,
        classes[size],
        isDisabled && classes.disabled
    );

    const checkmarkClasses = classNames(classes.checkmark, classes[color]);

    return (
        <label className={containerClasses}>
            <input
                type="checkbox"
                className={classes.input}
                checked={isCheckboxChecked}
                onChange={handleChange}
                disabled={isDisabled}
            />
            <span className={checkmarkClasses}></span>
            {label && (
                <Label
                    text={label}
                    required={required}
                    disabled={isDisabled}
                    size={size}
                />
            )}
        </label>
    );
};

export default Checkbox;
