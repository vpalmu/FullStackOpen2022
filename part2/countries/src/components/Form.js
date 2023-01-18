import React from 'react'

const Form = ({ filterBy, onFilterByEdit }) => {
    return(
        <form>
            <div>find Countries: <input value={filterBy} onChange={onFilterByEdit} /></div>
        </form>
    )
}

export default Form