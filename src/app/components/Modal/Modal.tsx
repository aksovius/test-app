import styles from './modal.module.css'
import AddUserForm from "../AddUser/AddUserForm";
import { useRef } from "react";
import useOutsideClick, { ConditionFunction } from "@/app/hooks/useOutsideClick";
import { ModalProps } from './ModalTypes';

const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  const modal = useRef<HTMLDivElement>(null);
  const conditions: ConditionFunction[] = [
    (event: MouseEvent) => !modal.current,
  ];
  useOutsideClick(modal, onClose, conditions)

  if (!isOpen) {
    return null;
  }
  return (
    <div className={styles.overlay} id='add-user-modal'>
      <div ref={modal} className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton} id='close-modal'>{"\u{0078}"}</button>
        <span className={styles.title}>사용자 추가</span>
        <AddUserForm onClose={onClose} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Modal;