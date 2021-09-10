import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={classes.modal}
      style={props.hide ? { display: "none" } : { display: "block" }}
    >
      <div className={classes["modal-title"]}>{props.title}</div>
      <div className={classes["modal-content"]}>{props.children}</div>
      <div className={classes["modal-footer"]}>
        <button
          className={classes["modal-action"]}
          type={props.type || "button"}
          onClick={props.onClick}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
