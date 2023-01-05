import Part from "./Part"

const Content = ({course}) => {
  console.log('Content:')
  console.log({course})

  const namePart1 = course.parts[0].name
  const namePart2 = course.parts[1].name
  const namePart3 = course.parts[2].name

  const nbrExercisesPart1 = course.parts[0].exercises
  const nbrExercisesPart2 = course.parts[1].exercises
  const nbrExercisesPart3 = course.parts[2].exercises

  return (
      <>
        <Part name={namePart1} nbrOfExercises={nbrExercisesPart1} />
        <Part name={namePart2} nbrOfExercises={nbrExercisesPart2} />
        <Part name={namePart3} nbrOfExercises={nbrExercisesPart3} />
      </>
    )
  }
  
  export default Content;