import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ onCloseModal, errorMsg }) => {
  const handleModalClose = (event) => {
    if (event.currentTarget.classList.contains("close")) {
      onCloseModal();
    }
  };
  return (
    <>
      <div className="overlay close" onClick={handleModalClose}></div>
      <div className="error-modal">
        <p className="header">Error Occoured</p>
        <p>{errorMsg + "!!!"}</p>
        <button onClick={handleModalClose} className="close">
          okay
        </button>
      </div>
    </>
  );
};

export default ErrorModal;
