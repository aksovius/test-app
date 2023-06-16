import { FC, ReactNode } from "react";
import styles from './modal.module.css'
import AddUserForm from "./AddUserForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>{"\u{1F5D9}"}</button>
        <span className={styles.title}>사용자 추가</span>
        <AddUserForm onClose={onClose}/>
      </div>
    </div>
  );
};

export default Modal;