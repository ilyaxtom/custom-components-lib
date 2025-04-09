import React from 'react';
import classNames from 'classnames';
import classes from '../Select.module.scss';

interface HelperTextProps {
    text: string;
    isDisabled?: boolean;
    isError?: boolean;
}

const HelperText: React.FC<HelperTextProps> = ({
    text,
    isDisabled,
    isError,
}) => {
    const helperTextClasses = classNames(
        classes.helperText,
        isDisabled && classes.disabled,
        isError && classes.error
    );

    return <div className={helperTextClasses}>{text}</div>;
};

export default HelperText;
