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
  })

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

  const deleteContact = (id) => {
    const contactToDelete = persons.find(p => p.id === id)
    const okToDelete = window.confirm(`delete ${contactToDelete.name}`)

    if(okToDelete) {
      contactService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(p => p.id !== id))
        notify(`${contactToDelete.name} deleted`)
        // console.log(persons)
      })
      .catch(() => {
        // setPersons(persons.filter(p => p.id !== id))
        notify(`Information of ${contactToDelete.name} has already been removed from server`, 'error')
      })
    }
  }

  const addContact = (e) => {
    e.preventDefault();
    const isTheSame = persons.find( p => p.name === newName); 

    if(isTheSame) {
      const isOk = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one`)
      if(isOk) {
        contactService
        .update(isTheSame.id, {name: isTheSame.name, number: newNumber} )
        .then(returnedContact => {
          const updatedPersons = persons.map(p => 
            p.id === isTheSame.id ? returnedContact : p)
          setPersons(updatedPersons)
          notify(`Changed number of ${isTheSame.name}`)
          setNewName(''); 
          setNewNumber(''); 
        })
      }

    } else {
      contactService
      .create({name: newName, number: newNumber})
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        notify(`Added ${newName}`)
        setNewName('')
        setNewNumber('') 
      })
    }
  }

  const personsToShow = newSearch.length === 0 ?
    persons : 
    persons.filter(p => p.name.toLowerCase().indexOf(newSearch.toLowerCase()) > 0 )

  return (
    <div>

      <h1>Phonebook</h1>
      <Notification notification={alert}/> 

      <Search 
        query={newSearch} 
        onChange={handleSearchName}
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
        persons={personsToShow}
        deleteContact={deleteContact}
        />
    </div>
  )
}

export default App; 

/*
TODO:

- Fix the filter, doesn't work properly
- Fix the new added item when it's deleted, still shows there 

*/