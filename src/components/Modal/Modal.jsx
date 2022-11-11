import { React, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
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
      <>
        <div className="Modal">
          <ModalOverlay onClose={onClose}>

          </ModalOverlay>
            {children}
        </div>
      </>
    ),
    modalRoot
 );
}
