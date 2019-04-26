import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  // any code that needs to run right before the component is removed
  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render () {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, i) => {
        return ( 
          <Person
            key={person.id} 
            click={() => this.props.clicked(i)}
            name={person.name} 
            age={person.age}
            changed={(event) => this.props.changed(event, person.id)} 
          />
        );
      });
    }
}

export default Persons;