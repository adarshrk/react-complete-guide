import React, { Component } from 'react';

// import './App.css';
import classes from './App.css';

import Persons from '../components/Persons/Persons';
import ValidationComponent from '../components/Assignment/ValidationComponent';
import CharComponent from '../components/Assignment/CharComponent';

import {generateJSONLD} from 'jsonLDPOC';
import SchemaGenerator from '../components/SeoSchema/SeoSchema';

import Cockpit from '../components/Cockpit/Cockpit';

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
    enteredText: '',
    jsonLDData: []
  };

  componentDidMount(){
    this.getJsonLD();
  }

  getJsonLD(){
    let dataObject = [{
      "type": "Organization",
      "name": "Realtor.com",
      "url": "https://www.realtor.com",
      "logo": "https://www.realtor.com/realtor-com.png",
      "sameAs": ["https://www.facebook.com/realtor.com",
          "https://twitter.com/REALTORdotcom",
          "https://www.youtube.com/user/RealtorDotCom",
          "https://plus.google.com/+REALTORdotcom",
          "https://www.pinterest.com/realtordotcom/",
          "https://www.linkedin.com/company/realtor-com",
          "https://en.wikipedia.org/wiki/Realtor.com",
          "https://www.wikidata.org/wiki/Q19866742"
      ]
  },
  {
      "type": "WebSite",
      "name": "Realtor.com",
      "url": "https://www.realtor.com"
  }
  ];

  console.log("generateJsonLD", generateJSONLD);
  
  generateJSONLD("homePage", dataObject)
  .then((result)=> {
    this.setState({
      jsonLDData: result
    })
  });
  }

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

    // 
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   margin: '2px'

    //   // If we are using the radium module
    //   // ':hover': {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // };
    
    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
            <Persons
            persons={this.state.person}
            nameChangeHandler={this.nameChangeHandler}
            deletePersonHandler={()=> this.deletePersonHandler}/>
          </div>
        );

        // style.backgroundColor = 'red';

        // If we are using the radium module
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // };
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

    return (
      // If we are using the radium module
      // <StyleRoot>
        <div className={classes.App}>
          <SchemaGenerator jsonLDData={this.state.jsonLDData}/>
          <Cockpit
            person={this.state.person}
            showPersons={this.showPersons}
            togglePersonHandler={this.togglePersonHandler}
          />
          {persons}

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