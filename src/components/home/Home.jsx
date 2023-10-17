import React from 'react'
import { useEffect, useState } from 'react';
function Home() {
    let [count,setCount] = useState(0);
    const initialCount = 0
  function increment(){
        setCount(count+1)
       
  }
  function decrement(){
    if(count<=0){
      setCount(alert("cant do"))
      setCount(count)
    }else{
      setCount(count-1)

    }
  }
  function reset(){
    setCount(initialCount)
  }
  useEffect(() =>{
    console.log(count)
  },[count])
  return (
    <div>
        <h1>Counter App</h1>
     
     <button onClick={increment}>Increment</button>

     <strong>Count :</strong> {count} 

     <button onClick={decrement}>Decrement</button>
     <button className='button' onClick={reset}>Reset</button>
    </div>
  )
}

export default Home