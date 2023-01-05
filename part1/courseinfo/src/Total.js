const Total = ({course}) => {
  console.log('Total:')
  console.log(course)

  const qtyExercisesPart1 = course.parts[0].exercises
  const qtyExercisesPart2 = course.parts[1].exercises
  const qtyExercisesPart3 = course.parts[2].exercises

  return (
      <>
        <p>Number of exercises: {qtyExercisesPart1 + qtyExercisesPart2 + qtyExercisesPart3}</p>
      </>
    )
  }
  
  export default Total;