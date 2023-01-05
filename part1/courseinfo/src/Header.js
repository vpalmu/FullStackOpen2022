const Header = (props) => {
    console.log('Header:')
    console.log({props})

    const courseName = props.course.name

    return (
      <>
        <h1>{courseName}</h1>
      </>
    )
  }
  
  export default Header;