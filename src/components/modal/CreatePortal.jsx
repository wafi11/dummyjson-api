import Modal from "./Modal";
import ReactDOM from "react-dom";

const portalElement = document.getElementById("modal");
const CreatePortal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Modal />, portalElement)}
      {ReactDOM.createPortal(<Modal />, portalElement)}
    </>
  );
};

export default CreatePortal();
