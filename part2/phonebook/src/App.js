import { useState, useEffect } from 'react'
import React from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Title from './components/Title'
import Button from './components/Button'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
    // States
    const [persons, setPersons] = useState(null)
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filterBy, setFilterBy] = useState('')
    const [message, setMessage] = useState(null)
    const [isError, setIsError] = useState(null)

    function nameAlreadyExists(personList, newName) {
        return personList.some(p => p.name === newName)
    }

    function numberHasChanged(personList, newName, newNumber) {
        return personList.some(p => p.name === newName && p.number !== newNumber)
    }

    function askToConfirmNumberUpdate(name, number) {
        return window.confirm(`${name} is already added to phonebook, replace the old number with a new one ${number} ?`)
    }

    function showMessage(message, isError = false) {
        setIsError(isError)
        setMessage(message)

        setTimeout(() => {
            setMessage(null)
            setIsError(null)
        }, 3000)
    }

    function createNewEntry(name, number) {
        const personToCreate = {
            // let the server handle the ID field
            name,
            number
        }

        personService
            .create(personToCreate)
            .then(createdPerson => {
                console.log(createdPerson)
                setPersons(persons.concat(createdPerson))
                setNewName('')
                setNewNumber('')
                showMessage(`Added '${createdPerson.name}'`)
            })
            .catch(error => {
                showMessage(error.response.data.error , true)
            })
    }

    function updateEntry(personToUpdate) {
        personService.update(personToUpdate)
            .then(updatedPerson => {
                showMessage(`Information of '${personToUpdate.name}' has been successfully updated`)
                const newPersonsList = updatePersonsList(persons, updatedPerson)
                setPersons(newPersonsList)
            })
            .catch(error => {
                console.log(error)
                if (error.response.data.error) {
                    showMessage(error.response.data.error, true)
                }
                else {
                    showMessage(error.response.statusText)
                    const newPersonsList = removePersonFromList(persons, personToUpdate)
                    setPersons(newPersonsList)
                }
            })
    }

    function updatePersonsList(currentPersonsList, update) {
        // search for the person that had number updated
        const newPersonsList = currentPersonsList.map(p => {
            if (p.id === update.id) {
                // update the number
                p.number = update.number
            }
            return p
        })
        return newPersonsList
    }

    function removePersonFromList(currentPersonsList, remove) {
        // search for the person that had number updated
        const newPersonsList = currentPersonsList.filter(p => p.id !== remove.id)
        return newPersonsList
    }

    // Event handlers
    const addPersonEventHandler = (event) => {
        event.preventDefault()

        const numberIsSame = !numberHasChanged(persons, newName, newNumber)

        if (nameAlreadyExists(persons, newName) && numberIsSame) {
            showMessage(`'${newName}/${newNumber}' already exists in the phonebook`)
            return
        }

        if (!numberIsSame) {
            console.log(`${newName}, ${newNumber} is already added to phonebook, but number has changed`)

            if (askToConfirmNumberUpdate(newName, newNumber))
            {
                // get the existing data for the person to be updated
                const personToUpdate = persons.find(person => person.name === newName)
                personToUpdate.number = newNumber

                // update number in existing entry
                updateEntry(personToUpdate)
                return
            }
            return // no updates
        }

        createNewEntry(newName, newNumber)
    }

    const removePersonEventHandler = (personToRemove) => {
        console.log('removePerson: ', personToRemove.name)
        if (window.confirm(`Do you really want to remove ' ${personToRemove.name}' ?`)) {
            // remove person here
            personService
                .remove(personToRemove.id).then(() => {
                    showMessage(`'${personToRemove.name}' has been removed from the phonebook`)
                })
                .catch(error => {
                    console.log(error)
                    if (error.response.data.error) {
                        showMessage(error.response.data.error)
                    } else {
                        showMessage(error.response.statusText)
                    }
                })

            // remove the person from staeful in-memory array
            const newListOfPersons = persons.filter(person => person.id !== personToRemove.id)
            setPersons(newListOfPersons)
        }
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

    // effect is executed immediately after rendering
    const hook = () => {
        console.log('calling API..')

        personService
            .getAll()
            .then(personlist => {
                console.log('Api retuned ', personlist.length, ' persons')
                setPersons(personlist)
            })
    }

    useEffect(hook, [])

    if (!persons) {
        console.log('initial render App with persons = null, wait for useEffect to fetch persons data..')
        return(null)
    }

    // rendering code
    const personsToShow = filterBy.length === 0
        ? persons
        : persons.filter(
            person => person.name.toLowerCase().startsWith(filterBy.toLowerCase())
        )

    console.log(`render App with ${persons.length} persons`)

    return (
        <div>
            <Notification message={message} isErrorMessage={isError} />
            <Title titleText='Phonebook' />
            <Filter filterByCriteria={filterBy} handleFilterEvent={filterByOnChangeEventHandler} />
            <Title titleText='Add a new' />
            <Form name={newName}
                number={newNumber}
                onNameEdit={nameOnChangeEventHandler}
                onNumberEdit={numberOnChangeEventHandler}
                onAddClick={addPersonEventHandler}
            />
            <Title titleText='Numbers' />
            <ul>
                {
                    personsToShow.map(person => {
                        const buttonId = person.id + 'Button'
                        return(
                            <li className="note" key={person.id}>
                                <Button key={buttonId} buttonText='delete' handleClick={() => removePersonEventHandler(person)} /> {person.name} {person.number}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default App
