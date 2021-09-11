/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React, { createContext, useState } from 'react';
import cssStyle from './favoritesContext.module.css';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetUp) => {},
  removeFavorite: (meetUpId) => {},
  ItemIsFavorite: (meetUpId) => {},
});

// es responsable por mantener actualizado el estado
export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetUp) =>{
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetUp)
    });
  }

  const removeFavoriteHandler = (meetUpId) =>{
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetUpId);
    });
  }

  const itemIsFavoriteHandler = (meetUpId) =>{
    return userFavorites.some(meetup => meetup.id === meetUpId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    ItemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;