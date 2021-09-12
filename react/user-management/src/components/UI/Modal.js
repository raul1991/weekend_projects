import classes from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";

const Modal = (props) => {
  return (
    <div
      style={props.hide ? { display: "none" } : { display: "block" }}
      onClick={props.onClick}
    >
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
