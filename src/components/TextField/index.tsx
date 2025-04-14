import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import classes from './TextField.module.scss';
import classnames from 'classnames';
import Label from './TextFieldLabel';

type TextFieldElements = HTMLTextAreaElement & HTMLInputElement;

interface TextFieldProps {
    variant?: 'outlined' | 'filled' | 'standard';
    type?: 'text' | 'number' | 'password';
    label?: string;
    helperText?: string;
    readonly?: boolean;
    value?: string;
    onChange?: (e: ChangeEvent<TextFieldElements>) => void;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    multiline?: boolean;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
    textareaProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
}

const TextField: React.FC<TextFieldProps> = ({
    variant = 'outlined',
    type = 'text',
    label,
    helperText,
    readonly,
    onChange,
    value,
    required,
    disabled,
    error,
    multiline,
    inputProps,
    textareaProps,
}) => {
    const isReadonly = readonly !== undefined;
    const [isFocused, setIsFocused] = useState(false);
    const fieldRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<TextFieldElements>(null);
    const isValid = Boolean(inputRef.current?.value);

    useEffect(() => {
        const handleClick = (e: Event) => {
            if (
                fieldRef.current &&
                !fieldRef.current.contains(e.target as Node)
            ) {
                setIsFocused(false);
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const fieldClasses = classnames(
        classes.field,
        classes[variant],
        isFocused && classes.focused,
        disabled && classes.disabled,
        error && classes.error
    );

    const helperClasses = classnames(
        classes.helperText,
        disabled && classes.disabled,
        error && classes.error
    );

    const handleChange = (e: ChangeEvent<TextFieldElements>) => {
        onChange?.(e);
    };

    const toggleFocus = () => {
        if (disabled) return;
        setIsFocused(true);
        inputRef.current?.focus();
    };

    return (
        <div className={classes.wrapper}>
            <div ref={fieldRef} className={fieldClasses} onClick={toggleFocus}>
                {multiline ? (
                    <textarea
                        rows={4}
                        value={value}
                        onChange={handleChange}
                        ref={inputRef}
                        className={classes.input}
                        readOnly={readonly}
                        {...textareaProps}
                    />
                ) : (
                    <input
                        value={value}
                        onChange={handleChange}
                        ref={inputRef}
                        className={classes.input}
                        type={type}
                        readOnly={isReadonly}
                        {...inputProps}
                    />
                )}
                {label && (
                    <Label
                        variant={variant}
                        text={label}
                        isFocused={isFocused}
                        isValid={isValid}
                        required={required}
                        disabled={disabled}
                        error={error}
                    />
                )}
            </div>
            {helperText && <div className={helperClasses}>{helperText}</div>}
        </div>
    );
};

export default TextField;
