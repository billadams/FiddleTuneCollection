import React, {
    useRef,
    useEffect,
    forwardRef
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import styles from './modal.module.css';

type ModalProps = {
    onClose: () => void;
    isOpen: boolean;
    children: React.ReactNode;
    classNames?: string;
}

const Modal = forwardRef<HTMLButtonElement, ModalProps>(function Modal({
    onClose,
    isOpen,
    children,
    classNames,
}, ref) {

    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.addEventListener('close', closeDialog);
            dialogRef.current.addEventListener('click', e => {
                const dialogDimensions = dialogRef.current?.getBoundingClientRect();

                if (dialogDimensions) {
                    if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
                        closeDialog()
                    }
                }
            })
        }

        return () => {
            dialogRef.current?.removeEventListener('close', closeDialog);
            dialogRef.current?.removeEventListener('click', () => { });
        };
    }, [])

    const dialogRef = useRef<HTMLDialogElement>(null);

    const getClassNames = (): string => {
        return classNames ? classNames : '';
    }

    const closeDialog = (): void => {
        if (typeof onClose === 'function') {
            onClose();
        }

        dialogRef.current?.close();
    }

    isOpen && dialogRef.current?.showModal();

    return (
        <dialog
            className={`${styles.contactDialog} ${getClassNames()}`}
            ref={dialogRef}
        >
            <div className={styles.closeButtonWrapper}>
                <button
                    ref={ref}
                    type='button'
                    id='close'
                    className={`${styles.closeButton} primary-button`}
                    aria-label='close'
                    onClick={() => closeDialog()}
                    formNoValidate
                    autoFocus
                >
                    <FontAwesomeIcon icon={faWindowClose} />
                </button>
            </div>
            {children}
        </dialog>
    );
})

export default Modal;