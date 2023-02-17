import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div onClick={props.onClick} className={styles.backdrop}></div>
      <div className={styles.modal}>{props.children}</div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
