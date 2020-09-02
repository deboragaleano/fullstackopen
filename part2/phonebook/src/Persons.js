import React from 'react'

const Persons = ({persons, deleteContact}) => {
    return (
    <ul>
      {persons.map(person => 
      <li key={person.name}>{person.name} {person.number}
        <button onClick={() => deleteContact(person.id)}>delete</button>
      </li>
      )}
    </ul>
    )
  }

export default Persons; 
