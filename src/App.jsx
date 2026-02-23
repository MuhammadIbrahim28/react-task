

import Counter from "./Components/Counter";
import Welcome from "./Components/Welcome"

function App() {
  let name = "ibrahim";
  let age = 28

  return (
    <>
    <Counter/>
    <Welcome name ={name} age = {age} />
    Hellow App
    
    </>
  )
}

export default App
