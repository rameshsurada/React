import React,{useState}  from 'react'
import "../App.css"
const Counter = () => {
    const [count,setCount]= useState(0)
  return (
    <div className='main'>
        <h1 className='text-red-400 text-8xl justify-center'>{count} </h1>
        <div  className='main' >
            <button className='btn' onClick={()=>setCount(count+1)}> Increment</button>
            <button className='btn'onClick={()=>setCount(count-1) }> Decrement</button>
            <button className='btn'onClick={()=>setCount(0) }> Reset</button>
        </div>
    </div>
  )
}

export default Counter