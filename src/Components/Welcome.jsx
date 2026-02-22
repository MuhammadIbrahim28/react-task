import Button from "./Button"

const Welcome = ({name,age}) => {
   // let name = "Ibrahim"
  return (
    
      <>
      <h1>{`My name is ${name} and my age ${age}`}</h1>
      <Button text="login"/>
      </>
    
  )
}

export default Welcome
