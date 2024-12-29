import "./styles.css";
import React, { useState } from "react";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div>
        <button onClick={toggleModal}> Open Modal</button>
      </div>
      {isVisible && (
        <div className="modal" role="dialog">
          <div> Modal Title </div>
          <div> Model content </div>
          <div>
            <button onClick={toggleModal}> Close Modal </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
