 import React, { useState } from 'react'
 
 const ToggleTheme = () => {
    const[bgColor,setbgColor]= useState('white');
    const [color,setColor]= useState('orange');
    const [btn,setBtn]= useState('white')

    const handleClick =()=> {

        setbgColor(bgColor==='white'?'#1b1b1b':'white');
        setColor(color==='orange'?'white':'orange');
        setBtn()
        
        
    }
   return (
     <div style={{ backgroundColor: bgColor,minHeight:'100vh',  color }}>
      
    <h1 className='text-7xl'>Toggle Theme</h1>
    <button onClick={handleClick} className='border-2 border-orange-300 text-orange-300'>
        {bgColor=='white'? "Dark Theme": "Light Theme"}
    </button>
     </div>
   )
 }
 
 export default ToggleTheme