const Part = ({ part }) => {
    console.log('Part')
    console.log('-part: ', part)

    return (
        <>
          <li>
            {part.name} - {part.exercises} courses
          </li>
        </>
      )
}
    
export default Part;