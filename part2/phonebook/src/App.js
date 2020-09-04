import React, { useState, useEffect } from 'react'; 
import contactService from './services/contact'; 
import Notification from './Notification';
import Search from './Search';
import PersonForm from './PersonForm';
import Persons from './Persons';

const App = () => {
  const [ persons, setPersons ] = useState([ ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch] = useState('')
  const [ alert, setAlert] = useState(null)

  useEffect(() => {
    contactService
      .getContacts()
      .then(contacts => {
        setPersons(contacts)
      })
  }, [])

  // it takes two args, the message and the type
  const notify = (message, type='success') => {
    setAlert({message, type});
    setTimeout(() => {
      setAlert(null)
    }, 4000)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchName = (e) => {
    setNewSearch(e.target.value)
  }

  const addContact = (e) => {
    e.preventDefault();
    const contactToAdd = {name: newName, number: newNumber}
    const pName = persons.map(p => p.name);
    // here it could have been this other solution below to find existing contact:
    // const isTheSame = persons.find( p => p.name === newName); 
    const isTheSame = pName.indexOf(newName) !== -1;

    if(isTheSame) {
      window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one`)
      const findPerson = persons.find(p => p.name === newName ? p : null)
      const contactToBeUpdated = {name: findPerson.name, number: newNumber}

      contactService
      .update(findPerson.id, contactToBeUpdated )
      .then(returnedContact => {
        const updatedPersons = persons.map(p => 
          p.id === findPerson.id ? returnedContact : p)
        setPersons(updatedPersons)
        setNewName(''); 
        setNewNumber(''); 
        notify(`Changed number of ${findPerson.name}`)
      })
      
    } else {
      contactService
      .create(contactToAdd)
      .then(addedPerson => {
        setPersons([...persons, addedPerson])
        setNewName(''); 
        setNewNumber(''); 
        notify(`Added ${contactToAdd.name}`)
      })
    }
  }

  const deleteContact = (id) => {
    const removeContacts = persons.filter(p => 
      p.id === id ? window.confirm(`delete ${p.name}`) ? p.id !== id : p: p)
    
    const contactToDelete = persons.find(p => p.id === id)

    contactService
      .remove(id)
      .then(returnedContact => {
        setPersons(removeContacts)
        notify(`${contactToDelete.name} deleted`, 'error')
      })
      .catch(error => {
        notify(`Information of ${contactToDelete.name} has already been removed from server`, 'error')
      })
  }

  const searchContact = (e) => {
    e.preventDefault(); 
    const filteredNames = persons.filter(person => person.name.toLowerCase().includes((newSearch)
    .toLowerCase()))
    setPersons(filteredNames); 
    setNewSearch(''); 
  }

  return (
    <div>

      <h1>Phonebook</h1>
      <Notification notification={alert}/> 
      <Search 
        query={newSearch} 
        handleSearch={handleSearchName} 
        searchContact={searchContact}
      />
      
      <h2>Add new</h2>
      <PersonForm 
        name={newName} 
        number={newNumber} 
        addContact={addContact}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
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

/*
CHANGES SINCE SUBMISSION:

- ADDED notify function to avoid repeating setTimeout 

*/