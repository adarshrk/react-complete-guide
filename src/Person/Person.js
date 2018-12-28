import React from 'react';
import './Person.css';

// import Radium from 'radium';

const person = (props) => {

    // If we are using the radium module
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        <div className="Person" onClick={props.deletePerson}>
            <p>I'm {props.name} with age {props.age}</p>
            <p>Children Property - {props.children}</p>
            <input onChange={props.changeName} value={props.name}></input>
        </div>
    );
};

// If we are using the radium module
// export default Radium(person);
export default person;