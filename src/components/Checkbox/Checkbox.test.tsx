import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './index';
import '@testing-library/jest-dom';
import classes from './Checkbox.module.scss';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
    test('renders with label', () => {
        render(<Checkbox label="Accept terms and conditions" />);
        expect(
            screen.getByText('Accept terms and conditions')
        ).toBeInTheDocument();
    });

    test('renders with default unchecked state', () => {
        render(<Checkbox label="Accept terms and conditions" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
    });

    test('renders with checked state when `checked` prop is true', () => {
        render(<Checkbox checked label="Accept terms and conditions" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
    });

    test('calls onChange when clicked', () => {
        const onChangeMock = jest.fn();
        render(
            <Checkbox
                onChange={onChangeMock}
                label="Accept terms and conditions"
            />
        );

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    test('does not call onChange when checkbox is disabled', () => {
        const onChangeMock = jest.fn();
        render(
            <Checkbox
                onChange={onChangeMock}
                label="Accept terms and conditions"
                disabled
            />
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
        userEvent.click(checkbox);
        expect(onChangeMock).not.toHaveBeenCalled();
    });

    test('applies correct color class based on `color` prop', () => {
        render(<Checkbox color="green" label="Accept terms and conditions" />);
        const checkboxSpan = screen.getByRole('checkbox').nextElementSibling;
        expect(checkboxSpan).toHaveClass(classes.green);
    });

    test('applies correct size class based on `size` prop', () => {
        render(<Checkbox size="large" label="Accept terms and conditions" />);
        const checkbox = screen.getByRole('checkbox');
        const container = checkbox.closest('label');
        expect(container).toHaveClass(classes.large);
    });

    test('disables checkbox when `disabled` prop is true', () => {
        render(<Checkbox disabled label="Accept terms and conditions" />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    test('checkbox updates its state on click when uncontrolled', () => {
        render(<Checkbox label="Accept terms and conditions" />);
        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();

        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    });
});
