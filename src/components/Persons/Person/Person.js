import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component{
    render(){
        return (
            <div className={classes.Person}>
            <div onClick={this.props.deletePerson}>
                <p>I'm {this.props.name} with age {this.props.age}</p>
                <p>Children Property - {this.props.children}</p>
            </div>
            <input onChange={this.props.changeName} value={this.props.name}></input>
            </div>
        );
    }
}

export default Person;