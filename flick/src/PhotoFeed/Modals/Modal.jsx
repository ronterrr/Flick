import "./modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    document.body.classList.remove('modal-open');
    return null;
  }

  document.body.classList.add('modal-open');

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
            &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;