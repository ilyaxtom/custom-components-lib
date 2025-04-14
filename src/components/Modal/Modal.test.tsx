import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './index';

describe('Modal', () => {
    test('opens and closes using internal state', async () => {
        render(<Modal>Modal Content</Modal>);

        const openButton = screen.getByTestId('open-button');
        await userEvent.click(openButton);

        expect(screen.getByTestId('modal')).toBeInTheDocument();

        const closeButton = screen.getByTestId('close-button');
        await userEvent.click(closeButton);

        expect(screen.queryByTestId('modal')).toBeNull();
    });

    test('does not open modal when open prop is false', () => {
        render(<Modal open={false}>Modal Content</Modal>);
        expect(screen.queryByTestId('modal')).toBeNull();
    });

    test('opens modal when open prop is true', () => {
        render(<Modal open={true}>Modal Content</Modal>);
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    test('calls onOpen callback when provided', async () => {
        const onOpen = jest.fn();
        render(<Modal onOpen={onOpen}>Modal Content</Modal>);

        const openButton = screen.getByTestId('open-button');
        await userEvent.click(openButton);

        expect(onOpen).toHaveBeenCalledTimes(1);
        expect(screen.queryByTestId('modal')).toBeNull();
    });

    test('calls onClose callback when provided', async () => {
        const onClose = jest.fn();
        render(
            <Modal open={true} onClose={onClose}>
                Modal Content
            </Modal>
        );

        const closeButton = screen.getByTestId('close-button');
        await userEvent.click(closeButton);

        expect(onClose).toHaveBeenCalledTimes(1);
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });
});
