/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React from 'react';
import cssStyle from './card.module.css';

const Card = (props) => {
  return <div className={cssStyle.card}>{props.children}</div>;
};

export default Card;
