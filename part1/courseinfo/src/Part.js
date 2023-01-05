const Part = (props) => {
  console.log('Part:')
  console.log({props})

  const { name, nbrOfExercises } = props

  return (
      <>
        <p>{name} - {nbrOfExercises}</p>
      </>
    )
  }
  
  export default Part;