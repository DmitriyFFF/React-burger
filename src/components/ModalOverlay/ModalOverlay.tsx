import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';
import { TModalProps } from '../../utils/types';


export const ModalOverlay: FC<TModalProps> = ({children, onClose}) => {

  return (
  <div className={styles.overlay} onClick={onClose}>
    {children}
  </div>
  );
}

// ModalOverlay.propTypes = {
//   children: PropTypes.element,
//   onClose: PropTypes.func
// }
