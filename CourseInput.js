import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  //usestate to color the input if user enter s some value or not

  const [isValid,setvalid]=useState(false);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    //check if user enter the value or not
    if(enteredValue.trim().length==0){
      setvalid(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' :''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button className=
      {`Button-control
       ${!isValid ?
        'empty': ''}`} 
        type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
