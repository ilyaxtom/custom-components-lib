import React, { useState, useEffect } from 'react';
import classes from './Modal.module.scss';
import Button from '@/components/Button';

interface ModalProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    children,
    open,
    onOpen,
    onClose,
    ...rest
}) => {
    const [modal, setModal] = useState(false);

    const isOpen = open ?? modal;

    const handleOpen = () => {
        if (onOpen) {
            onOpen();
            return;
        }
        setModal(true);
    };

    const handleClose = () => {
        if (onClose) {
            onClose();
            return;
        }
        setModal(false);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <>
            <Button
                data-testid="open-button"
                variant={'text'}
                onClick={handleOpen}
            >
                Open
            </Button>

            {isOpen && (
                <div data-testid="modal" className={classes.modal}>
                    <div
                        onClick={handleClose}
                        className={classes.overlay}
                    ></div>
                    <div className={classes.modalContent} {...rest}>
                        {children}
                        <Button
                            data-testid="close-button"
                            variant={'text'}
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
