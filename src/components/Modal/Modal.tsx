import React, { useEffect, FC } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Modal.module.css';
import { TModalProps } from '../../utils/types';

const modalRoot = document.getElementById("react-modals") as HTMLElement;

export const Modal: FC<TModalProps> = ({ children, title, onClose }) => {

  useEffect(() => {
    const handleEscClose = (evt: KeyboardEvent) => {
      if(evt.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={`${styles.container} mt-10 ml-10 mr-10`}>
            <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>
            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon type="secondary" />
            </button>
          </div>
          {children}
        </div>
      </ModalOverlay>
    </>,
  modalRoot
 );
}
