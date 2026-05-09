// * This component will works well. A simple presentational component
// * As discussed previously, this component have 4 props and all the values should be pased.
// * First consider when we can create a normal component into a compound components
const Modal = (props) => {
  const { title, handleClose, handleSave, description } = props;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h1>{title}</h1>
        </div>
        <div className="modal-body">
          <p>{description}</p>
        </div>
        <div className="modal-footer">
          <button onClick={handleClose}>Close</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
