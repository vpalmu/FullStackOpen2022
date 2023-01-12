import Content from "./Content"
import Header from "./Header"
import Total from "./Total"
const Course =  ({course}) => {
    console.log('Course')
    console.log('-course:', course)

    return (
        <>
          <Header text={course.name} />
          <Content course={course} />
          <Total parts={course.parts} />
        </>
      )
}

export default Course;