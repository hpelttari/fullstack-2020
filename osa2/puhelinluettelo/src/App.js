import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import SuccessNotification from './components/SuccessNotification'
import ErrorNotification from './components/ErrorNotification'

const App = () => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter ] = useState('')
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)){
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
              const person = persons.find(p => p.name === newName)
              const changedPerson = { ...person, number: newNumber }
              const id = person.id
                personService
                    .update(id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
                        setSuccessMessage(`Number changed for ${changedPerson.name}`)
                        setTimeout(() => {
                            setSuccessMessage(null)
                        }, 5000)
                    }).catch(error => {
                        setErrorMessage(`Information of ${person.name} has already been removed from the sercer`)
                            setTimeout(() => {
                                setErrorMessage(null)
                            }, 5000)
                    })

                
        } 
            setNewName('')
            setNewNumber('')
            return
        }
        const personObject = {
            name: newName,
            number: newNumber
        }
        personService
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                setSuccessMessage(`Added ${returnedPerson.name}`)
                setTimeout(() => {
                    setSuccessMessage(null)
                }, 5000)
            })
      }
    
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleRemove = (id) => {
        const person = persons.find(p => p.id === id)
        if( window.confirm(`Delete ${person.name}?`) ){
            personService.remove(id)
            personService.getAll().then(
                returnedPersons => {
                    setPersons(returnedPersons)
                    setSuccessMessage(`Deleted ${person.name}`)
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000)
                }
            )
        }
    }
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    useEffect(() => {
        personService
            .getAll().then(
                initialPersons => {
                    setPersons(initialPersons)
                }
            )
      }, [])
  return (
    <div>
      <h2>Phonebook</h2>
      <SuccessNotification message={successMessage}/>
      <ErrorNotification message={errorMessage}/>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson}
                  newName={newName}
                  handleNameChange={handleNameChange}
                  newNumber={newNumber}
                  handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleRemove={handleRemove}/>
    </div>
  )

}

export default App
