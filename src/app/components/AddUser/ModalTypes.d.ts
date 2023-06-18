export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (input: InputForm) => void;
  }
  