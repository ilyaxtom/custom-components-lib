import React from 'react';
import classes from './Label.module.scss';
import classNames from 'classnames';

interface LabelProps {
    text: string;
    required?: boolean;
    disabled?: boolean;
    size: 'small' | 'medium' | 'large';
}

const Label: React.FC<LabelProps> = ({ text, required, disabled, size }) => {
    const labelText = `${text}${required ? ' *' : ''}`;
    const labelClasses = classNames(
        classes.label,
        classes[size],
        disabled && classes.disable
    );

    return <span className={labelClasses}>{labelText}</span>;
};

export default Label;
