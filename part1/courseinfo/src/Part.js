const Part = (props) => {
  console.log('Part:')
  console.log({props})
    return (
      <>
        <p>{props.part} - {props.exercises}</p>
      </>
    )
  }
  
  export default Part;