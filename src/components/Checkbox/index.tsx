import React from 'react';
import classes from './Checkbox.module.scss';
import classNames from 'classnames';
import Label from '../Label';

// Todo: Fix checked, disabled styles

interface CheckboxProps {
    checked?: boolean;
    label?: string;
    required?: boolean;
    size?: 'small' | 'medium' | 'large';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    color?: 'blue' | 'purple' | 'green' | 'grey' | 'pink';
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
    const [isChecked, setIsChecked] = React.useState(Boolean(checked));
    const isControlled = onChange !== undefined;
    const isDisabled = disabled !== undefined;

    const isCheckboxChecked = isControlled ? checked : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        if (isControlled) {
            onChange?.(e);
        }
        setIsChecked(value);
    };

    const containerClasses = classNames(
        classes.container,
        classes[size],
        isDisabled && classes.disabled
    );

    const checkmarkClasses = classNames(classes.checkmark, classes[color]);
    const checkboxContainerClasses = classNames(
        classes.checkboxContainer,
        classes[size]
    );
    const wrapperClasses = classNames(
        classes.wrapper,
        isDisabled && classes.disabled
    );

    return (
        <div className={wrapperClasses}>
            <div className={checkboxContainerClasses}>
                <label className={containerClasses}>
                    <input
                        type="checkbox"
                        className={classes.input}
                        checked={isCheckboxChecked}
                        onChange={handleChange}
                        disabled={isDisabled}
                    />
                    <span className={checkmarkClasses}></span>
                </label>
            </div>

            {label && (
                <Label
                    text={label}
                    required={required}
                    disabled={isDisabled}
                    size={size}
                />
            )}
        </div>
    );
};

export default Checkbox;
