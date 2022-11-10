import React from 'react';
import styles from './Modal.module.css';


const modalRoot = document.getElementById("react-modals");

const Modal =({ children, onClose }) => {

  const handleEscClose = (evt) => {
    if(evt.key === 'Escape') {
      onClose();
    }
  }

  React.useEffect(() => {
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
          <ModalHeader onClose={onClose}>{header}</ModalHeader>
            {children}
        </div>
        <ModalBackDrop onClose={onClose} />
      </>
    ),
    modalRoot
 );
}
