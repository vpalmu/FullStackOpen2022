const Part = ({ name, nbrOfExercises }) => {
  console.log('Part:')
  console.log(name)
  console.log(nbrOfExercises)

  return (
      <>
        <p>{name} - {nbrOfExercises}</p>
      </>
    )
  }
  
  export default Part;