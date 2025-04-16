import React from 'react';
import classes from './Label.module.scss';
import classNames from 'classnames';

interface LabelProps {
    sz: 'small' | 'medium' | 'large';
    text: string;
    required?: boolean;
    disabled?: boolean;
}

const Label: React.FC<LabelProps> = ({ text, required, disabled, sz }) => {
    const labelText = `${text}${required ? ' *' : ''}`;
    const labelClasses = classNames(
        classes.label,
        classes[sz],
        disabled && classes.disable
    );

    return <span className={labelClasses}>{labelText}</span>;
};

export default Label;
