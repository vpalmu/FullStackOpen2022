import React from 'react'
import Title from './Title'
import Label from './Label'
import List from './List'
import Image from './Image'
import Weather from './Weather'

const Country = ({ country }) => {
    const languages = Object.values(country.languages)
    const url = country.flags['png']
    
    return(
        <>
            <Title text={ country.name.common } />
            <Label labelName='Capital' labelText={ country.capital } />
            <Label labelName='Area' labelText={ country.area.toLocaleString(undefined, 2) } />
            <Label labelName='Population' labelText={ country.population.toLocaleString(undefined, 2) } />
            <Title text='Languages:' />
            <List list={ languages } />
            <br></br>   
            <Image imageUrl={ url} />
            <Weather country={country} />
        </>
    )
}

export default Country