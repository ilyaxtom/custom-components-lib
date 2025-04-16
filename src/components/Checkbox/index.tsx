import React from 'react';
import classes from './Checkbox.module.scss';
import classNames from 'classnames';
import Label from '../Label';

interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    sz?: 'small' | 'medium' | 'large';
    color?: 'blue' | 'purple' | 'green' | 'grey' | 'pink';
    label?: string;
    required?: boolean;
    disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
    sz = 'medium',
    color = 'blue',
    label,
    checked,
    required,
    disabled,
    onChange,
    ...rest
}) => {
    const [isChecked, setIsChecked] = React.useState(Boolean(checked));
    const isControlled = checked !== undefined;
    const isDisabled = Boolean(disabled);

    const isCheckboxChecked = isControlled ? Boolean(checked) : isChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        if (!isControlled) {
            setIsChecked(value);
        }
        onChange?.(e);
    };

    const containerClasses = classNames(
        classes.container,
        classes[sz],
        isDisabled && classes.disabled
    );

    const checkmarkClasses = classNames(classes.checkmark, classes[color]);

    const checkboxContainerClasses = classNames(
        classes.checkboxContainer,
        classes[sz]
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
                        {...rest}
                    />
                    <span className={checkmarkClasses}></span>
                </label>
            </div>

            {label && (
                <Label
                    text={label}
                    required={required}
                    disabled={isDisabled}
                    sz={sz}
                />
            )}
        </div>
    );
};

export default Checkbox;
