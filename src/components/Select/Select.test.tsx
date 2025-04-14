import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './index';

const mockOptions = [
    { id: 1, title: 'Option 1' },
    { id: 2, title: 'Option 2' },
    { id: 3, title: 'Option 3' },
];

describe('Select component', () => {
    test('renders without crashing with default props', () => {
        render(<Select options={mockOptions} />);
        expect(screen.getByTestId('select')).toBeInTheDocument();
    });

    test('displays selected option title from selectedId', () => {
        render(<Select options={mockOptions} selectedId={2} />);
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    test('opens dropdown on click and selects option (uncontrolled)', async () => {
        render(<Select options={mockOptions} />);

        await userEvent.click(screen.getByTestId('select'));
        expect(screen.getByText('Option 1')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Option 3'));
        expect(screen.getByText('Option 3')).toBeInTheDocument();
    });

    test('calls onChange with correct id (controlled)', async () => {
        const handleChange = jest.fn();
        render(
            <Select
                options={mockOptions}
                selectedId={1}
                onChange={handleChange}
            />
        );

        await userEvent.click(screen.getByText('Option 1'));
        await userEvent.click(screen.getByText('Option 2'));
        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(2);
    });

    test('does not open dropdown when disabled', () => {
        render(<Select options={mockOptions} disabled />);

        userEvent.click(screen.getByTestId('select'));
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
    });

    test('renders label and helperText when provided', () => {
        render(
            <Select
                options={mockOptions}
                label="Select an option"
                helperText="This is helper text"
            />
        );

        expect(screen.getByText('Select an option')).toBeInTheDocument();
        expect(screen.getByText('This is helper text')).toBeInTheDocument();
    });
});
