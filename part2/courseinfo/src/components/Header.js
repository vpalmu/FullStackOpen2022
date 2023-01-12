const Header = ({text}) => {
    console.log('Header')
    console.log('-text: ', text)

    return (
      <>
        <h1>{text}</h1>
      </>
    )
  }
  
  export default Header;