import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter ] = useState('')
  
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)){
            window.alert(`${newName} is already added to phonebook`)
            setNewName('')
            return
        }
        const personObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
      axios
        .get('http://localhost:3001/persons').then(response => {
          setPersons(response.data)
        })
    }, [])
  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )

}

export default App
