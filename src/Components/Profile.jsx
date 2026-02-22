
const Profile = ({name,rollno,img}) => {
  return (
    <div style={{border:"1px solid gray",padding:"10px",margin:"10px"}}>
      <h1>Name:{name}</h1>
      <h3>Rollno:{rollno}</h3>
      <img src={img} width={200} height={200}></img>
    </div>
  )
}

export default Profile
