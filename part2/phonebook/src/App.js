import React, { useState } from 'react'; 

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (e) => {
    e.preventDefault();
    const nameToAdd = {name: newName}
    setPersons([...persons, nameToAdd])
    setNewName(''); 
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

    // console.log(new);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      
      <h2>Numbers</h2>
        <ul>
          {persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
    </div>
  )
}

export default App
