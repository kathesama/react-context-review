import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/allMeetups/AllMeetups';
import FavoritesPage from './pages/favorites/Favorites';
import NewMeetupPage from './pages/meetups/newMeetUp.component';
import MainNavigation from './component/layout/mainNavigation.component';
import Layout from './component/layout/layout.component';

// import TodoComponent from './component/todo/TodoComponent';
// import BackdropComponent from './component/backdrop/BackdropComponent';
// import ModalComponent from './component/modal/ModalComponent';

// function App() {
//   return (
//     <div>
//       <h1>My Todos</h1>
//       <TodoComponent text="first" />
//       <TodoComponent text="second" />
//       <TodoComponent text="third" />
//       {/*<ModalComponent/>*/}
//       {/*<BackdropComponent/>*/}
//     </div>
//   );
// }
//
// export default App;

function App() {
  return <Layout>
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupPage/>
      </Route>
      <Route path='/favorites'>
        <FavoritesPage/>
      </Route>
    </Switch>
  </Layout>;
}

export default App;
