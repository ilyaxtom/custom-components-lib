import React from 'react';
import classes from '../Select.module.scss';
import classNames from 'classnames';

interface SelectLabelProps {
    text: string;
    isDisabled: boolean;
    isError: boolean;
    required?: boolean;
}

const SelectLabel: React.FC<SelectLabelProps> = ({
    text,
    isError,
    isDisabled,
    required,
}) => {
    const isRequired = required !== undefined;

    const labelClasses = classNames(
        classes.label,
        isDisabled && classes.disabled,
        isError && classes.error
    );

    const labelText = `${text} ${isRequired ? ' *' : ''}`;

    return <label className={labelClasses}>{labelText}</label>;
};

export default SelectLabel;
