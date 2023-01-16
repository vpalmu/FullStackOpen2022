import { useState, useEffect } from 'react'
import React from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Person from './components/Person'
import Title from './components/Title'
import axios from 'axios'

const App = () => {
  // States
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nextId, setNextId] = useState(5)
  const [filterBy, setFilterBy] = useState('')

  // Events
  const addPersonOnClickHandler = (event) => {
    event.preventDefault()

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    if (persons.some(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)
      return
    }
    
    const personObject = {
      id: nextId,
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNextId(nextId + 1)
    setNewName('')
    setNewNumber('')
  }

  const nameOnChangeEventHandler = (event) => {
    setNewName(event.target.value)
  }

  const numberOnChangeEventHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const filterByOnChangeEventHandler = (event) => {
    setFilterBy(event.target.value)
  }

  const personsToShow = filterBy.length === 0 
      ? persons
      : persons.filter(
          person => person.name.toLowerCase()
                               .startsWith(filterBy.toLowerCase())
      )
  
  // effect is executed immediately after rendering    
  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
         .then(response => {
            console.log('promise fulfilled')
            setPersons(response.data)
         })
  }

  useEffect(hook, [])

  console.log('render', persons.length, 'notes')
  console.log('notes', persons)
  
  return (
    <div>
      <Title titleText='Phonebook' />  
      <Filter filterByCriteria={filterBy} handleFilterEvent={filterByOnChangeEventHandler} />
      <Title titleText='Add a new' />
      <Form name={newName} 
            number={newNumber} 
            onNameEdit={nameOnChangeEventHandler} 
            onNumberEdit={numberOnChangeEventHandler} 
            onAddClick={addPersonOnClickHandler} 
      />
      <Title titleText='Numbers' />
      <ul>
        {personsToShow.map(person =>
          <Person key={person.id} name={person.name} number={person.number}/>
        )}
      </ul>
    </div>
  )
}

export default App
