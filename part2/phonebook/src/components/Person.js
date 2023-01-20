import React from 'react'

const Person = ({ person }) => {
    console.log('rendering Person..')
    return(
        <p> {person.name} {person.number}</p>
    )
}

export default Person