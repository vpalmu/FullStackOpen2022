import { React, useState } from 'react'
import Button from './Button'
import Country from './Country'

const ActionList = ({ list: countries }) => {
    let [selectedCountry, setSelectedCountry] = useState(null)

    const showButtonClickHandler = (country) => {
        console.log('showButtonClickHandler:', country.name.common)
        setSelectedCountry(country)
    }

    console.log('rendering ActionList..')
    return(
      <>
        <ul>
            {   
                countries.map((country) => {
                    return(
                        <li key={country.name.common}>
                            {country.name.common} {' '}
                            <Button buttonText='show' handleClick={ () => showButtonClickHandler(country) } />
                        </li>
                    )
                })
            }
        </ul>
        { selectedCountry === null ? <div></div> : <Country country={ selectedCountry } /> }
     </>
    )
}

export default ActionList