import React, { useState, useEffect } from 'react';
import classes from './Modal.module.scss';
import Button from '@/components/Button';

interface ModalProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
    open?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    children,
    style,
    open,
    onOpen,
    onClose,
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
                    <div style={style} className={classes.modalContent}>
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
