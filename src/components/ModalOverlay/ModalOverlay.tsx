import React, { FC } from 'react';
import styles from './ModalOverlay.module.css';
import { TModalProps } from '../../utils/types';


export const ModalOverlay: FC<TModalProps> = ({children, onClose}) => {

  return (
  <div className={styles.overlay} onClick={onClose}>
    {children}
  </div>
  );
}
