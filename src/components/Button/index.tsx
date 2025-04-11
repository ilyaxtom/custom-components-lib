import React from 'react';
import classNames from 'classnames';
import classes from './Button.module.scss';
import Loader from './Loader';

interface ButtonProps {
    children: React.ReactNode;
    color?: 'secondary' | 'success' | 'error';
    variant?: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    loading?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'outlined',
    disabled,
    color,
    loading,
    size = 'small',
    onClick,
}) => {
    const isDisabled = !(typeof disabled === 'undefined');
    const isLoading = !(typeof loading === 'undefined');

    const classList = classNames(
        classes.button,
        classes[variant],
        isDisabled || isLoading ? classes.disabled : '',
        color ? classes[color] : '',
        classes[size]
    );

    return (
        <button className={classList} onClick={() => onClick?.()}>
            {isLoading && <Loader />}
            {children}
        </button>
    );
};

export default Button;
