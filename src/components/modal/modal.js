import './modal.css';

const Modal = ({ textContent, callback, handleHideModal }) => {
  return (
    <div className='my-modal'>
      <div className='my-modal-text'>{textContent}</div>
      <button className='btn btn-danger' onClick={callback}>
        Да
      </button>
      <button className='btn btn-close' onClick={handleHideModal}></button>
    </div>
  );
};

export default Modal;
