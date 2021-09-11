/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React from 'react';
import cssStyle from './layout.module.css';
import MainNavigation from './mainNavigation.component';

const Layout = (props) => {
  return <div>
    <MainNavigation/>
    <main className={cssStyle.main}>
      {props.children}
    </main>
  </div>;
};

export default Layout;
