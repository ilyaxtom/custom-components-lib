import React from 'react';
import classes from './Switch.module.scss';
import Label from '../Label';
import classNames from 'classnames';

interface SwitchProps {
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    defaultChecked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    required?: boolean;
    color?: 'default' | 'purple' | 'orange' | 'grey' | 'pink';
}

const Switch: React.FC<SwitchProps> = ({
    size = 'small',
    disabled,
    defaultChecked,
    onChange,
    label,
    required,
    color = 'default',
}) => {
    const [isChecked, setIsChecked] = React.useState(Boolean(defaultChecked));
    const isDisabled = disabled !== undefined;
    const isControlled = onChange !== undefined;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        if (isControlled) {
            onChange?.(e);
        }
        setIsChecked(value);
    };

    const wrapperClasses = `${classes.wrapper} ${classes[size]}`;
    const sliderClasses = `${classes.slider} ${classes[size]}`;
    const inputClasses = `${classes.input} ${classes[color]}`;
    const switchClasses = classNames(
        classes.switchGroup,
        classes[size],
        isDisabled && classes.disabled
    );

    return (
        <div className={switchClasses}>
            <div className={wrapperClasses}>
                <label className={classes.switch}>
                    <input
                        type="checkbox"
                        className={inputClasses}
                        disabled={isDisabled}
                        checked={isChecked}
                        onChange={handleChange}
                    />
                    <span className={sliderClasses}></span>
                </label>
            </div>
            {label && <Label required={required} size={size} text={label} />}
        </div>
    );
};

export default Switch;
