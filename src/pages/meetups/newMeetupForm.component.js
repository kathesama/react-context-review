/*
Created by: kathe
On: 10-Sep-21 : 10-Sep-21
Project: react-course
*/
import React, { useRef } from 'react';
import Card from '../../component/UI/card.component';
import cssStyle from './newMeetupForm.module.css';

const NewMeetupForm = (props) => {
  const titleInputRef= useRef('');
  const imageInputRef= useRef('');
  const addressInputRef= useRef('');
  const descriptionInputRef= useRef('');

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupDataObject = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onResult(meetupDataObject);
    // console.log(meetupDataObject);
  }

  return <Card>
    <form className={cssStyle.form} onSubmit={submitFormHandler}>
      <div className={cssStyle.control}>
        <label htmlFor='title'>Meetup title</label>
        <input type='text' required={true} id='title' name='title' ref={titleInputRef}></input>
      </div>
      <div className={cssStyle.control}>
        <label htmlFor='image'>Meetup image</label>
        <input type='url' required={true} id='image' name='image' ref={imageInputRef}></input>
      </div>
      <div className={cssStyle.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' required={true} id='address' name='address' ref={addressInputRef}></input>
      </div>
      <div className={cssStyle.control}>
        <label htmlFor='description'>Description</label>
        <textarea type='text' required={true} id='description' name='description' rows='5' ref={descriptionInputRef}></textarea>
      </div>
      <div className={cssStyle.actions}>
        <button>Add meetup</button>
      </div>
    </form>
  </Card>;
};

export default NewMeetupForm;
