import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//container manages the state and manipulate the state
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
    let persons = null; // better approach is create variables, instead of use ternary expression

    if ( this.state.showPersons ) {
      persons = ( 
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}>
        </Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;