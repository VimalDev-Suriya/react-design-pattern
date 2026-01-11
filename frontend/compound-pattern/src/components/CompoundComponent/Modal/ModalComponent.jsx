const Modal = (props) => {
  const { children, isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        {children}

        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => {
  return <div className="modal-header">{children}</div>;
};

const ModalBody = ({ children }) => {
  return <div className="modal-body">{children}</div>;
};

const ModalFooter = ({ children }) => {
  return <div className="modal-footer">{children}</div>;
};

Modal.ModalHeader = ModalHeader;
Modal.ModalBody = ModalBody;
Modal.ModalFooter = ModalFooter;

export default Modal;
