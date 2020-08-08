import React, { useEffect } from "react";
import Modal from "react-modal";
import noScroll from "no-scroll";

Modal.defaultStyles = {};

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};
// Modal.defaultStyles.overlay.backgroundColor = "rgba(255,255,255,0.7)";
// Modal.defaultStyles.overlay.zIndex = "1000";

const ModalComponent = ({
  children,
  onClose,
  isOpen,
  closeModal,
  label,
  canClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      noScroll.on();
    }

    return () => noScroll.off();
  });
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel={label}
    >
      {canClose ? (
        <div className="modal-close-btn" onClick={closeModal}>
          <div className="fa-icon"></div>
        </div>
      ) : null}
      {children}
    </Modal>
  );
};

export default ModalComponent;