import { useState } from 'react';

import BackDrop from "./BackDrop";
import Modal from "./Modals";

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className="btn" onClick = { deleteHandler }>Delete</button>
      </div>
      { modalIsOpen && <Modal onCancel = { closeModalHandler } onConfirm = { closeModalHandler } /> }
      { modalIsOpen && <BackDrop onCancel = { closeModalHandler } /> }
      
    </div>
  );
}

export default Todo;
