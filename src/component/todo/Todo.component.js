/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React, {useState} from 'react';
import BackdropComponent from '../backdrop/Backdrop.component';
import ModalComponent from '../modal/Modal.component';

const TodoComponent = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onButtonClickHandler = (event) =>{
    console.log('event.target.name');
    console.log(event);
    setModalIsOpen(true);
  }

  const closeModalHandler = (event) =>{
    setModalIsOpen(false);
  }

  const onCancelHandler = (event) =>{
    console.log('onCancelHandler');
    setModalIsOpen(false);
  }
  const onConfirmHandler = (event) =>{
    console.log('onConfirmHandler');
    setModalIsOpen(false);
  }
  return(
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={onButtonClickHandler}>Delete</button>
      </div>
      {modalIsOpen && <ModalComponent onCancel={onCancelHandler} onConfirm={onConfirmHandler}/>}
      {modalIsOpen && <BackdropComponent onClick={closeModalHandler}/>}
    </div>
  );
};

export default TodoComponent;
