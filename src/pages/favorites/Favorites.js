/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React, { useContext } from 'react';
// import FavoritesContext from '../store'
import cssStyle from './Favorites.css';
import FavoritesContext from '../../store/favoritesContext.component';
import MeetupList from '../meetups/meetupList.component';

const Favorites = (props) => {
  const favoriteContext = useContext(FavoritesContext);
  let content;

  if (favoriteContext.totalFavorites === 0){
    content= <p>No favorites yet</p>;
  }else{
    content=  <MeetupList data={favoriteContext.favorites}/>;
  }

  return <section>
    <h1>My Favorites</h1>
    {content}
  </section>;
};

export default Favorites;
