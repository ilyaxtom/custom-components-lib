import React from 'react';
import classes from './TextFieldLabel.module.scss';
import classnames from 'classnames';

interface LabelProps {
    variant: 'outlined' | 'filled' | 'standard';
    text: string;
    isFocused: boolean;
    isValid: boolean;
    required?: boolean;
    disabled?: boolean;
}

const TextFieldLabel: React.FC<LabelProps> = ({
    variant,
    text,
    isFocused,
    isValid,
    required,
    disabled,
}) => {
    const labelText = `${text}${required ? ' *' : ''}`;

    const labelClasses = classnames(
        classes.label,
        classes[variant],
        isFocused && classes.focused,
        isValid && classes.valid,
        disabled && classes.disabled
    );

    return <label className={labelClasses}>{labelText}</label>;
};

export default TextFieldLabel;
