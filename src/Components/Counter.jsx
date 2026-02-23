import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1 style={{color:count<0 ? "red" :"black"}}>
       {count}</h1>
         {count > 10 && <p>High Value</p>}
        <button onClick={()=>setCount(prev =>prev+1)}>+</button>
        <button onClick={()=>setCount(prev =>prev-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter
