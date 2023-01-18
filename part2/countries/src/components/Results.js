import { React } from 'react'
import Country from './Country'
import ActionList from './ActionList'

const Results = ({ countriesToShow }) => {
    //console.log('countriesToShow', countriesToShow)
    return(   
    <>
      {
        countriesToShow.length === 1
           ? <Country country={ countriesToShow[0]} />
           : <ActionList list={ countriesToShow } />
      }
    </>
  )
}

export default Results