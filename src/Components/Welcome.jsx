import Button from "./Button"
import Profile from "./Profile"
import ismail from '../assets/Images/ismail.jpg'
import ibrahim from '../assets/Images/Ibrahim_profile.jpg'
import ghaffar from '../assets/Images/ghaffar.jpg'


const Welcome = ({name,age}) => {
   // let name = "Ibrahim"
   const students = [
    {name:"ibrahim",nollno:28 ,img:ibrahim},
    {name:"ismail",nollno:2 ,img:ismail},
    {name:"Ghaffar",nollno:18 ,img:ghaffar}
   ]
  return (
    
      <>
      <h1>{`My name is ${name} and my age ${age}`}</h1>
      <Button text="Login"/> 
      <Button text="signUP"/> 
      {
        students.map((student, index)=>(
            <Profile
                key={index}
                name={student.name}
                rollno={student.rollno}
                img={student.img}
            />
        ))
      }
     
      </>
    
  )
}

export default Welcome
