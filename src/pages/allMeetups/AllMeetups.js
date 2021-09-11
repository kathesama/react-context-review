/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React, {useState, useEffect} from 'react';
import cssStyle from './AllMeetups.css';
import MeetupList from '../meetups/meetupList.component';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ]

const AllMeetups = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://reactreview-e7fdc-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        const meetups = [];

        // convirtiendo un arreglo de objetos en un array del tipo que recibe el componente
        for(const key in data){
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }
        console.log(meetups);
        setData(meetups);
      })
      .catch(err => console.log(err));
  }, []);

  if (loading){
    return <section><p>loading...</p></section>
  }

  return <div>
    <h1>All Meetups</h1>
    <MeetupList data={data}/>
  </div>;
};

export default AllMeetups;
