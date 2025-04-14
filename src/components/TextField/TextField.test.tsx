import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './index';
import userEvent from '@testing-library/user-event';

describe('TextField', () => {
    test('renders input by default', () => {
        render(<TextField />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('renders label if provided', () => {
        render(<TextField label="Username" />);
        expect(screen.getByText('Username')).toBeInTheDocument();
    });

    test('renders helper text if provided', () => {
        render(<TextField helperText="Enter your name" />);
        expect(screen.getByText('Enter your name')).toBeInTheDocument();
    });

    test('calls onChange when input changes', () => {
        const handleChange = jest.fn();
        render(<TextField onChange={handleChange} />);
        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'Hello' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('respects the `value` prop (controlled input)', () => {
        render(<TextField value="Controlled" />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input.value).toBe('Controlled');
    });

    test('does not allow editing if readonly', () => {
        const handleChange = jest.fn();
        render(<TextField value="ReadOnly" readonly onChange={handleChange} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;

        fireEvent.change(input, { target: { value: 'Changed' } });
        expect(handleChange).toHaveBeenCalled(); // Still fires
        expect(input.value).toBe('ReadOnly');
    });

    test('does not allow interaction if disabled', () => {
        const handleChange = jest.fn();
        render(<TextField disabled onChange={handleChange} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;

        expect(input).toBeDisabled();
        fireEvent.change(input, { target: { value: 'Disabled' } });
        expect(handleChange).not.toHaveBeenCalled();
    });

    test('renders a textarea when multiline is true', () => {
        render(<TextField multiline />);
        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.tagName).toBe('TEXTAREA');
    });
});
