import React, { useState } from 'react';
import classes from './Modal.module.scss';
import Button from '@/components/Button';

interface ModalProps {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

const Modal: React.FC<ModalProps> = ({ children, style }) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    // if (modal) {
    //     document.body.style.overflowY = 'hidden';
    // } else {
    //     document.body.style.overflowY = 'auto';
    // }

    return (
        <>
            <Button variant={'text'} onClick={toggleModal}>
                Open
            </Button>

            {modal && (
                <div className={classes.modal}>
                    <div
                        onClick={toggleModal}
                        className={classes.overlay}
                    ></div>
                    <div style={style} className={classes.modalContent}>
                        {children}
                        <Button variant={'text'} onClick={toggleModal}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
