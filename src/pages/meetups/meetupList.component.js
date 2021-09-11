/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React from 'react';

import cssStyle from './meetupList.module.css';
import MeetUpItem from './meetUpItem.component';

const MeetupList = (props) => {
  return(
    <ul className={ cssStyle.list }>
      {
        props.data.map( (element) =>
          <MeetUpItem
            key={ element.id }
            id={ element.id }
            image={ element.image }
            title={ element.title }
            address={ element.address }
            description={ element.description }
          />
        )
      }
    </ul>
  );
};

export default MeetupList;
