import { render, screen, fireEvent } from '@testing-library/react';
import Button from './index';
import classes from './Button.module.scss';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('renders button with children text', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByTestId('button')).toHaveTextContent('Click Me');
    });

    test('applies correct class for variant', () => {
        render(<Button variant="contained">Contained</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass(classes.contained);
    });

    test('applies correct class for color', () => {
        render(<Button color="success">Success</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass(classes.success);
    });

    test('applies correct class for size', () => {
        render(<Button size="large">Large</Button>);
        const button = screen.getByTestId('button');
        expect(button).toHaveClass(classes.large);
    });

    test('disables button when disabled prop is true', () => {
        render(<Button disabled>Disabled</Button>);
        const button = screen.getByTestId('button');
        expect(button).toBeDisabled();
    });

    test('displays loader when loading prop is true', () => {
        render(<Button loading>Loading</Button>);
        expect(screen.getByTestId('button')).toContainElement(
            screen.getByTestId('loader')
        );
    });

    test('does not display loader when loading is false', () => {
        render(<Button>Non-loading</Button>);
        expect(screen.queryByTestId('loader')).toBeNull();
    });

    test('fires onClick handler when clicked', () => {
        const onClickMock = jest.fn();
        render(<Button onClick={onClickMock}>Click Me</Button>);

        const button = screen.getByTestId('button');
        fireEvent.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('does not fire onClick handler when button is disabled', () => {
        const onClickMock = jest.fn();
        render(
            <Button onClick={onClickMock} disabled>
                Click Me
            </Button>
        );

        const button = screen.getByTestId('button');
        fireEvent.click(button);

        expect(onClickMock).not.toHaveBeenCalled();
    });
});
