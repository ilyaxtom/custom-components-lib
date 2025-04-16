import React from 'react';
import classes from './Switch.module.scss';
import Label from '../Label';
import classNames from 'classnames';

interface SwitchProps extends React.HTMLProps<HTMLInputElement> {
    sz?: 'small' | 'medium' | 'large';
    color?: 'default' | 'purple' | 'orange' | 'grey' | 'pink';
    label?: string;
    disabled?: boolean;
    defaultChecked?: boolean;
    required?: boolean;
}

const Switch: React.FC<SwitchProps> = ({
    sz = 'small',
    color = 'default',
    label,
    disabled,
    defaultChecked,
    required,
    onChange,
}) => {
    const isDisabled = Boolean(disabled);
    const isControlled = Boolean(onChange);
    const [isChecked, setIsChecked] = React.useState(Boolean(defaultChecked));

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        if (isControlled) {
            onChange?.(e);
        }
        setIsChecked(value);
    };

    const wrapperClasses = classNames(classes.wrapper, classes[sz]);
    const sliderClasses = classNames(classes.slider, classes[sz]);
    const inputClasses = classNames(classes.input, classes[color]);
    const switchClasses = classNames(
        classes.switchGroup,
        classes[sz],
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
            {label && <Label required={required} sz={sz} text={label} />}
        </div>
    );
};

export default Switch;
