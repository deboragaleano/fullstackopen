import React, { useState, useEffect } from 'react'; 
import contact from './services/contact'; 

const Search = ({query, handleSearch, searchContact}) => {
  return (
    <form onSubmit={searchContact}>
      filter shown with 
      <input 
        value={query} 
        onChange={handleSearch}/>
    </form>  
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

const App = () => {
  const [ persons, setPersons ] = useState([ ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('')

  useEffect(() => {
    contact
      .getContacts()
      .then(contacts => {
        setPersons(contacts)
      })
  }, [])

  // Todo: Check if this is the correct PUT request 
  const addContact = (e) => {
    e.preventDefault();
    const contactToAdd = {name: newName, number: newNumber}
    const pName = persons.map(p => p.name);
    const isTheSame = pName.indexOf(newName) !== -1;

    if(isTheSame) {
      window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one`)
      const findPerson = persons.find(p => p.name === newName ? p : null)
      const contactToBeUpdated = {name: findPerson.name, number: newNumber}

      contact
      .update(findPerson.id, contactToBeUpdated )
      .then(returnedContact => {
        const updatedPersons = persons.map(p => 
          p.id === findPerson.id ? returnedContact : p)
        setPersons(updatedPersons)
        setNewName(''); 
        setNewNumber(''); 
      })

    } else {
        contact
        .create(contactToAdd)
        .then(returnedContact => {
          setPersons([...persons, returnedContact])
          setNewName(''); 
          setNewNumber(''); 
        })
    }
  }


  // TODO: Check if this is correct (as for the .then returnedContact for example
  // add the catch error message 
  const deleteContact = (id) => {
    const removeContacts = persons.filter(p => 
      p.id === id ? window.confirm(`delete ${p.name}`) ? p.id !== id : p: p)

    contact
      .remove(id)
      .then(returnedContact => {
        setPersons(removeContacts)
      })
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
        persons={persons}
      />
      
      <h2>Numbers</h2>
      <Persons 
        persons={persons}
        deleteContact={deleteContact}
        />
    </div>
  )
}

export default App; 
