import React, { useState } from 'react'; 

const Search = ({query, handleSearch, searchContact}) => {
  return (
    <div>
      filter shown with 
      <input 
        value={query} 
        onChange={handleSearch}/>
      <button 
        onClick={searchContact} 
        type="submit">search</button>
    </div>  
  )
}

const PersonFrom = ({name, number, nameChange, addContact, numberChange}) => {
  return (
    <form>
      <div>
        name: <input value={name} onChange={nameChange}/>
      </div>
      <div>
        number: <input value={number} onChange={numberChange}/>
      </div>
      <div>
        <button onClick={addContact} type="submit">add</button>
      </div>
  </form>
  )
}

const Persons = ({persons}) => {
  return (
  <ul>
    {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
  </ul>
  )
}


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '0394485' },
    { name: 'Debora', number: '139393'},
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122'} 
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('')

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

  const searchContact = (e) => {
    e.preventDefault(); 
    const filteredNames = persons.filter(person => person.name.toLowerCase().includes((newSearch)
    .toLowerCase()))
    setPersons(filteredNames); 
    setNewSearch(''); 
  }

  const handleSearchName = (e) => {
    setNewSearch(e.target.value)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>

      <h1>Phonebook</h1>
      <Search 
        query={newSearch} 
        handleSearch={handleSearchName} 
        searchContact={searchContact}
      />
      
      <h2>Add new</h2>
      <PersonFrom 
        name={newName} 
        number={newNumber} 
        addContact={addContact}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
      />
      
      <h2>Numbers</h2>
      <Persons persons={persons}/>
    </div>
  )
}

export default App

/*
TO DO:

 - fix the filter search input to not use a button
 - fix the filter to return results with first name only (not the whole string)

*/