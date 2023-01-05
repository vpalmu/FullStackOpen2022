const Total = (props) => {
  console.log('Total:')
  console.log({props})

  const qtyExercisesPart1 = props.course.parts[0].exercises
  const qtyExercisesPart2 = props.course.parts[1].exercises
  const qtyExercisesPart3 = props.course.parts[2].exercises

  return (
      <>
        <p>Number of exercises: {qtyExercisesPart1 + qtyExercisesPart2 + qtyExercisesPart3}</p>
      </>
    )
  }
  
  export default Total;