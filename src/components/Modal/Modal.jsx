import { React, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalOverlay } from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './Modal.module.css';


const modalRoot = document.getElementById("react-modals");

export const Modal =({ children, title, onClose }) => {

  useEffect(() => {
    const handleEscClose = (evt) => {
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

Modal.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  onClose: PropTypes.func
}
