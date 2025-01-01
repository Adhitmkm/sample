import React, { useState } from 'react'

export default function Dummy() {
const [counter,setcounter] = useState(0)
    function increment() {
        if(counter<10){
            setcounter(counter+1)
        }else{
            alert("wsting time for clicking increment")
        }
    }
    function decrementt() {
        if(counter>0){
            setcounter(counter-1)
        }else{
            alert("wsting time for cliking decrement")
        }
    }

  return (
    <div>
      <h1>counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrementt}>decrement</button>
    </div>
  )
}
