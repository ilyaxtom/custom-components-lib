import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.scss';
import Loader from './Loader';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'text' | 'contained' | 'outlined';
    sz?: 'small' | 'medium' | 'large';
    color?: 'secondary' | 'success' | 'error';
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'outlined',
    sz = 'small',
    color,
    disabled,
    loading,
    onClick,
    ...rest
}) => {
    const isDisabled = Boolean(disabled);
    const isLoading = Boolean(loading);

    const classList = classNames(
        classes.button,
        classes[variant],
        isDisabled || isLoading ? classes.disabled : '',
        color ? classes[color] : '',
        classes[sz]
    );

    return (
        <button
            data-testid={'button'}
            className={classList}
            onClick={(e) => onClick?.(e)}
            disabled={isDisabled}
            {...rest}
        >
            {isLoading && <Loader />}
            {children}
        </button>
    );
};

export default Button;
