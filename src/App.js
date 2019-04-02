import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 20 },
      { name: 'Manu', age: 21 }
    ],
    otherState: 'rs',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Manu', age: 22 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 20 },
        { name: event.target.value, age: 22 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>pff</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { 
          this.state.showPersons ?
            <div>  
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Maxx!')} >My hobbies: Racing</Person>
              <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                changed={this.nameChangedHandler}>My hobbies: Racing</Person>
            </div> : null
        }
      </div>
    );
  }
}

export default App;

// const app = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Max', age: 20 },
//       { name: 'Manu', age: 21 }
//     ],
//     otherState: 'rs'
//   });
  
//   const switchNameHandler = () => {
//     // console.log('he');
//     setPersonsState({
//       persons: [
//         { name: 'Maxzdd', age: 20 },
//         { name: 'Manu', age: 22 }
//       ],
//       otherState: personsState.otherState
//     });
//   }
  

//     return (
//       <div className="App">
//         <h1>pff</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person 
//         name={personsState.persons[0].name} 
//         age={personsState.persons[0].age}>My hobbies: Racing</Person>
//         <Person 
//         name={personsState.persons[1].name} 
//         age={personsState.persons[1].age}>My hobbies: Racing</Person>
//       </div>
//     );
//   }
  
//   export default app;

