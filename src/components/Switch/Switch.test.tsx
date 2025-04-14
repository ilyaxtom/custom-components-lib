import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch from './index';

describe('Switch', () => {
    test('renders correctly with default props', () => {
        render(<Switch />);
        const input = screen.getByRole('checkbox');
        expect(input).toBeInTheDocument();
        expect(input).not.toBeChecked();
    });

    test('renders checked when defaultChecked is true', () => {
        render(<Switch defaultChecked />);
        const input = screen.getByRole('checkbox');
        expect(input).toBeChecked();
    });

    test('toggles state when clicked (uncontrolled)', async () => {
        render(<Switch />);
        const input = screen.getByRole('checkbox');

        await userEvent.click(input);
        expect(input).toBeChecked();

        await userEvent.click(input);
        expect(input).not.toBeChecked();
    });

    test('calls onChange when used in controlled mode', async () => {
        const handleChange = jest.fn();
        render(<Switch onChange={handleChange} />);
        const input = screen.getByRole('checkbox');

        await userEvent.click(input);
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('does not call onChange or change state when disabled', () => {
        const handleChange = jest.fn();
        render(<Switch disabled onChange={handleChange} />);
        const input = screen.getByRole('checkbox');

        userEvent.click(input);
        expect(handleChange).not.toHaveBeenCalled();
        expect(input).not.toBeChecked();
    });

    test('renders label when provided', () => {
        render(<Switch label="Enable feature" />);
        expect(screen.getByText('Enable feature')).toBeInTheDocument();
    });
});
