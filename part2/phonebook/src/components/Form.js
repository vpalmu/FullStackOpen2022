import React from 'react'

const Form = ({ name, number, onNameEdit, onNumberEdit, onAddClick }) => {
    return(
        <form onSubmit={onAddClick}>
            <div>name: <input value={name} onChange={onNameEdit} /></div>
            <div>number: <input value={number} onChange={onNumberEdit}/></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}

export default Form