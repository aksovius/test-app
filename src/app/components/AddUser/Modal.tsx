import styles from './modal.module.css'
import AddUserForm from "./AddUserForm";
import { useRef } from "react";
import useOutsideClick, { ConditionFunction } from "@/app/hooks/useOutsideClick";
import { ModalProps } from './ModalTypes';

const Modal = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  
  if (!isOpen) {
    return null;
  }

  const modal = useRef<HTMLDivElement>(null);
  const conditions: ConditionFunction[] = [
    (event: MouseEvent) => !modal.current,
];
  useOutsideClick(modal, onClose, conditions)
 


  return (
    <div className={styles.overlay}>
      <div ref={modal} className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>{"\u{1F5D9}"}</button>
        <span className={styles.title}>사용자 추가</span>
        <AddUserForm onClose={onClose} onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default Modal;