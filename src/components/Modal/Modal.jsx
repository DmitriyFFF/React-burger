import { React, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Modal.module.css';



export const Modal =({ children, onClose }) => {

  const modalRoot = document.getElementById("react-modals");
  const handleEscClose = (evt) => {
    if(evt.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);
  //const { children, header, onClose } = this.props;
    // Возвращаем ReactDOM.createPortal,
    // который поместит дочерние элементы в modalRoot
  return ReactDOM.createPortal(
    (
      <div>
        <ModalOverlay onClose={onClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={onClose}>
              <CloseIcon type="secondary" />
            </button>
          </div>
          {children}
        </ModalOverlay>
      </div>
    ),
    modalRoot
 );
}
