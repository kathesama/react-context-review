/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React from 'react';

const BackdropComponent = (props) => {
 //aqui llamamos al evento del padre dentro del hijo
  return <div className='backdrop' onClick={props.onClick}></div>;
};

export default BackdropComponent;
