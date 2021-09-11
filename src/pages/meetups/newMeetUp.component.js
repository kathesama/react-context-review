/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React from 'react';
import { useHistory } from 'react-router-dom'

import cssStyle from './newMeetUp.module.css';
import NewMeetupForm from './newMeetupForm.component';

const newMeetUpComponent = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useHistory();

  const handleFormResult = (data) => {
    console.log('data');
    console.log(data);

    fetch(
      'https://reactreview-e7fdc-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
        history.replace('/')
      })
      .catch(err => console.log(err));
  }
  return <section>
    <h1>Add new Meetup</h1>
    <NewMeetupForm onResult={handleFormResult}/>
  </section>;
};

export default newMeetUpComponent;
