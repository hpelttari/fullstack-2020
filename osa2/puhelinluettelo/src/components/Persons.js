import React from 'react'
import Person from './Person'

const Persons = ({persons, filter, handleRemove}) => {
    return (
      <ul>
          {persons.filter(person => 
              person.name.toLowerCase().includes(filter.toLowerCase())).map(person =>
                  <Person key={person.name}
                          person={person}
                          handleRemove={handleRemove}/>)}
      </ul>
    )

}

export default Persons
