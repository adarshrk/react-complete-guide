import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let buttonClass = '';
    if(props.showPersons){
        buttonClass = classes.Red;
    }
    if(props.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.person.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi I am a React APP</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button className={buttonClass} onClick={props.togglePersonHandler}>Toggle Persons</button>
            <br></br>
        </div>
    );
};

export default cockpit;