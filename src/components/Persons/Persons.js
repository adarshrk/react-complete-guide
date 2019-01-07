import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {

  render(){

    return this.props.persons.map((individual, index) => {
      return <Person 
      name={individual.name} 
      age={individual.age} 
      key={index} 
      changeName={(event) => this.props.nameChangeHandler(event, index)} 
      deletePerson={this.props.deletePersonHandler(index)}
      />
    });

  }

}

export default Persons;
