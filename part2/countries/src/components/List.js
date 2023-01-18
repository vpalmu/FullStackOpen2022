import React from 'react'

const List = ({ list }) => {
    //console.log('List', list)
    return(
        <ul>
            { list.map(listItem => <li key={listItem}> {listItem}</li>) }
        </ul>
    )
}

export default List