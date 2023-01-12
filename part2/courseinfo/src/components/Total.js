const Total =  ({ parts}) => {
    console.log('Total')
    console.log('-parts:', parts)
    
    const total = parts.reduce((sum,part) => sum + part.exercises, 0)

    return (
     <>
       <p>Total of {total} exercises</p>
     </>
    )
}

export default Total;