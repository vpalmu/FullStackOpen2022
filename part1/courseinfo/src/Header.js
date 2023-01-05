const Header = ({course}) => {
    console.log('Header:')
    console.log(course)

    const courseName = course.name

    return (
      <>
        <h1>{courseName}</h1>
      </>
    )
  }
  
  export default Header;