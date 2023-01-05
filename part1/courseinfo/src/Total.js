const Total = (props) => {
  console.log('Total:')
  console.log({props})
    return (
      <>
        <p>Number of exercises: {props.total}</p>
      </>
    )
  }
  
  export default Total;