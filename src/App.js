import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './Assignment/ValidationComponent';
import CharComponent from './Assignment/CharComponent';

// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    person: [
      {name: "Adi", age: 27},
      {name: "Avi", age: 27},
      {name: "Ravi", age: 26}
    ],
    showPersons: false,
    enteredTextLength: 0,
    enteredText: ''
  };

  togglePersonHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  };

  nameChangeHandler = (event, key) => {
    let newPersonArr = [...this.state.person];
    newPersonArr[key].name = event.target.value;
    this.setState({
      person: newPersonArr
    });
  };

  deletePersonHandler = (key) => {
    let newPersonArr = [...this.state.person];
    newPersonArr.splice(key, 1);
    this.setState({
      person: newPersonArr
    });
  }

  /* Assignment solution */
  changeListner = (event) => {
    this.setState({
      enteredTextLength: event.target.value.length,
      enteredText: event.target.value
    });
    
  };

  /* Assignment solution */
  charClickHandler = (indexAtLetter) => {
    let textArr = [...this.state.enteredText.split('')];
    textArr.splice(indexAtLetter, 1);
    this.setState({
      enteredText: textArr.join(''),
      enteredTextLength: textArr.length
    });
  };

  


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '2px'

      // If we are using the radium module
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };
    
    let persons = null;
    if(this.state.showPersons){
        persons = (
          this.state.person.map((individual, index) => {
            return <Person 
            name={individual.name} 
            age={individual.age} 
            key={index} 
            changeName={(event) => this.nameChangeHandler(event, index)} 
            deletePerson={this.deletePersonHandler.bind(this, index)}/>
          })
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        };
    }

    /* Assignment solution */
    let charCoponentVar = null;
    if(this.state.enteredTextLength > 0){
      charCoponentVar = (
        <div>
          {
            this.state.enteredText.split('').map((letter, index) => {
              return <CharComponent 
              letterFromText={letter}
              key={index}
              deleteLetterFromText={() => this.charClickHandler(index)}
              >
              </CharComponent>
            })
          }
        </div>
      );
    }

    let classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <= 1){
      classes.push('bold');
    }

    return (
      // If we are using the radium module
      // <StyleRoot>
        <div className="App">
          <h1>Hi I am a React APP</h1>
          <p className={classes.join(' ')}>This is really working</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
          <br></br>

          {/* Assignment solution */}
          <input onChange={this.changeListner} value={this.state.enteredText}></input>
          <p>{this.state.enteredTextLength}</p>
          <ValidationComponent textLength={this.state.enteredTextLength}/>
          {charCoponentVar}
        </div>
      // </StyleRoot>
    );
  }
}

// If we are using the radium module
// export default Radium(App);

export default App;