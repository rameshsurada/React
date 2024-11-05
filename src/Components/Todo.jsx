import React, { useState } from 'react'
import '../App.css'
const Todo = () => {
    const [task,setTask] = useState([]);
    const [input,setInput]=useState('');

    const addTask =(event)=>{
        event.preventDefault();
        if (input.trim()!="" ){
            setTask([...task,input])
        setInput('')
        }
    }
    const removeTask =(index)=>{
        setTask(task.filter((_,i)=>i!=index))
    }
    const handleChange =(event)=> {setInput(event.target.value)

    }

  return (
    <section>
        <input value={input} className='bg-red-300' type='text' onChange={handleChange}/>
        <button className='' onClick={addTask}>Add </button> 
        { task.map((todo,index)=>(<li key ={index}> {todo} <button className='btn' onClick={()=> removeTask(index)}> x</button></li>))

       
        }
        
    </section>


   
    
  )
}

export default Todo