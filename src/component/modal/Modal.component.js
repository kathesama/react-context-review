/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React from 'react';

const ModalComponent = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  }

  const confirmHandler = () => {
    props.onConfirm();
  }

  return <div className='modal'>
    <p>Are you sure?</p>
    <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
    <button className='btn' onClick={confirmHandler}>Confirm</button>
  </div>;
};

export default ModalComponent;
