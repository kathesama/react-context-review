/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
// useContext permite usar el contexto
import React, { useContext } from 'react';

import cssStyle from './meetUpItem.module.css';
import Card from '../../component/UI/card.component';
import FavoritesContext from '../../store/favoritesContext.component';

const MeetUpItem = (props) => {
  const favoritesContext = useContext(FavoritesContext);

  const itemIsFavorite = favoritesContext.ItemIsFavorite(props.id);

  const toggleFavoritesStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id)
    }else{
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      })
    }
  }

  return <li className={cssStyle.item}>
    <Card>
      <div className={cssStyle.image}>
        <img src={props.image} alt={props.title}/>
      </div>
      <div className={cssStyle.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={cssStyle.actions}>
        <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite? 'Remove from favorites': 'add to favorites'}</button>
      </div>
    </Card>
  </li>;
};

export default MeetUpItem;
