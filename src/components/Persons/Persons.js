import React from 'react';

import Person from './Person/Person';

const persons = (props) => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, i) => {
        return <Person
          key={person.id} 
          click={() => props.clicked(i)}
          name={person.name} 
          age={person.age}
          changed={(event) => props.changed(event, person.id)} />
      } ) };

export default persons;