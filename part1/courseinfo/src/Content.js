import Part from "./Part"

const Content = (props) => {
  console.log('Content:')
  console.log({props})

  const namePart1 = props.course.parts[0].name
  const namePart2 = props.course.parts[1].name
  const namePart3 = props.course.parts[2].name

  const nbrExercisesPart1 = props.course.parts[0].exercises
  const nbrExercisesPart2 = props.course.parts[1].exercises
  const nbrExercisesPart3 = props.course.parts[2].exercises

  return (
      <>
        <Part name={namePart1} nbrOfExercises={nbrExercisesPart1} />
        <Part name={namePart2} nbrOfExercises={nbrExercisesPart2} />
        <Part name={namePart3} nbrOfExercises={nbrExercisesPart3} />
      </>
    )
  }
  
  export default Content;