import React from 'react';
import styles from './ModalOverlay.module.css';


export const ModalOverlay = (children, onClose) => {
  // Монтируем div и рендерим в него дочерние элементы
  return (
  <div className={styles.overlay} onClick={onClose}>
    {children}
  </div>
  );
}
