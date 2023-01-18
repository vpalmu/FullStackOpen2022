import { useState, useEffect } from 'react'
import axios from 'axios';
import React from 'react'
import Text from './components/Label';
import Form from './components/Form';
import Results from './components/Results';

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
                        .startsWith(newFilterByFieldValue.toLowerCase())
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
  console.log('countriesToShow:', countriesToShow.length)

  return (
    <div>
      <Form filterBy={filterBy} 
            onFilterByEdit={filterByOnChangeEventHandler} 
      />
      { 
        countriesToShow.length > MAX_RESULT_SIZE
          ? <Text content='Too many matches, specify another filter'/>
          : <Results countriesToShow={ countriesToShow } />
      }
    </div>
  )
}

export default App;
