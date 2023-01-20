import { useState, useEffect } from 'react'
import axios from 'axios';
import React from 'react'
import Form from './components/Form';
import Results from './components/Results';
import Message from './components/Message';

const App = () => {
   // States
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])
  const [filterBy, setFilterBy] = useState('')

  const MAX_RESULT_SIZE = 10

  const filterByOnChangeEventHandler = (event) => {
    const newFilterByFieldValue = event.target.value
    setFilterBy(newFilterByFieldValue)
    console.log('using filter:', newFilterByFieldValue)

    setCountriesToShow(countries.filter(
      c => c.name.common.toLowerCase()
                        .includes(newFilterByFieldValue.toLowerCase())
    ))
  }

  const fetchCountriesHook = () => {
    console.log('effect running to load initial country data..')
    console.log('making api call..')
    axios.get('https://restcountries.com/v3.1/all')
        .then(result => {
          console.log(`fetched data of ${result.data.length} countries.`)
          setCountries(result.data) 
          console.log(`changing state: countries`)
        })
  }

  useEffect(fetchCountriesHook, [])
   
  console.log('rendering App..')
  
  const tooManyResults = countriesToShow.length > MAX_RESULT_SIZE
  const isSearching = filterBy.length > 0

  console.log('countriesToShow', countriesToShow.length)
  console.log('filterBy:', `'${filterBy}'`)
  console.log('tooManyResults', tooManyResults)

  return (
    <div>
      <Form filterBy={filterBy} 
            onFilterByEdit={filterByOnChangeEventHandler} 
      />
      { isSearching
        ? tooManyResults
          ? <Message content='Too many matches, specify another filter' />
          : <Results countriesToShow={ countriesToShow } /> 
        : <p></p>
      }
    </div>
  )
}

export default App;
