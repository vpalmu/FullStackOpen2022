const Part = (props) => {
    console.log('component: Part')
    return (
      <>
        <p>{props.part} - {props.exercises}</p>
      </>
    )
  }
  
  export default Part;