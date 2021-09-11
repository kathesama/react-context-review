/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import cssStyle from './mainNavigation.module.css';
import FavoritesContext from '../../store/favoritesContext.component';

const MainNavigationComponent = (props) => {
  const favoriteContext = useContext(FavoritesContext);

  return(
    <header className={cssStyle.header}>
      <div className={cssStyle.logo}>React Meetups</div>
      <nav>
        <ul>
          <li><Link to="/">All Meetups</Link></li>
          <li><Link to="/new-meetup">New Meetup</Link></li>
          <li><Link to="/favorites">Favorites <span className={cssStyle.badge}>{favoriteContext.totalFavorites}</span></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationComponent;
