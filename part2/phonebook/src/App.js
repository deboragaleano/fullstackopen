import React, { useState } from 'react'; 

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '0394485' },
    { name: 'Debora', number: '139393'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addContact = (e) => {
    e.preventDefault();
    const contactToAdd = {name: newName, number: newNumber}
    const pName = persons.map(p => p.name);
    const isTheSame = pName.indexOf(newName) !== -1;
    isTheSame ? alert(`${newName} is already added to the phonebook`) : 
    setPersons([...persons, contactToAdd])
    setNewName(''); 
    setNewNumber(''); 
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button onClick={addContact} type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
        </ul>
        
    </div>
  )
}

export default App
