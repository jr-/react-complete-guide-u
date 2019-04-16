import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 20 },
      { id: '2', name: 'Manu', age: 21 },
      { id: '3', name: 'Mann', age: 22 } 
    ],
    otherState: 'rs',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [ ...this.state.persons ]; //pointer to array /why const /now we have a new array
    persons.splice(personIndex, 1); //change the information in the pointer
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return  p.id === id;
    });

    const person = { 
      ...this.state.persons[personIndex]
    }; //we shouldnt mutate the real element /person is a copy element

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {
      persons: persons
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null; // better approach is create variables, instead of use ternary expression
    let btnClass = '';


    if ( this.state.showPersons ) {
      persons = ( 
        <div>
          {this.state.persons.map((person, i) => {
            return <Person
              key={person.id} 
              click={() => this.deletePersonHandler(i)}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( classes.red );
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold );
    }


    return (
      <div className={classes.App}>
        <h1>pff</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          
          {persons}

      </div>
    );
  }
}

export default App;