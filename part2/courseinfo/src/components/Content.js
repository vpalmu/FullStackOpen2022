import Part from "./Part"

const Content =  ({course}) => {
    console.log('Content')
    console.log('-course:', course)

    return (
        <>
          <ul>
            { course.parts.map((part) => <Part key={part.id} part={part} />) }
          </ul>
        </>
      )
}

export default Content;