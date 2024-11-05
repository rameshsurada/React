import React,{useState} from 'react'
import '../App.css'


const Calculator = () => {

    const [input, setInput] = useState('');
    const display =(value)=>{
        setInput(input+value);
    }
    const calculate =()=> setInput(eval(input))
  return (
    <div className= ' main bg-slate-500 min-h-screen flex  justify-center items-center'>
        <div className='bg-white p-4 rounded-lg'>
        <h1 className='text-3xl text-black text-center'> Calculator</h1>
           <div className='mb-4'>
             <input className="w-full p-4 text-2xl text-right bg-gray-100 rounded-lg focus:outline-none"
            readOnly value={input} onChange={(e)=>setInput(e.target.value) } />
            </div>
             

        <div className='grid grid-cols-4 gap-2'>
            <button className='btn'  onClick={()=>display(7)} >7</button>
            <button className='btn'  onClick={()=>display(9)} >9</button>
            <button className='btn'  onClick={()=>display(8)} >8</button>
            <button className='btn-symbol' onClick={()=>display("+")} >+</button>
            <button className='btn'  onClick={()=>display(4)} >4</button>
            <button className='btn'  onClick={()=>display(5)} >5</button>
            <button className='btn'  onClick={()=>display(6)} >6</button>
            <button className='btn-symbol'  onClick={()=>display("-")} >-</button>
            <button className='btn'  onClick={()=>display(1)} >1</button>
            <button className='btn'  onClick={()=>display(2)} >2</button>
            <button className='btn'  onClick={()=>display(3)} >3</button>
            <button className='btn-symbol'  onClick={()=>display("*")} >x</button>
            <button className='btn'  onClick={()=>display(0)} >0</button> 
            <button className='btn'  onClick={()=>display(".")} >.</button>
            <button className='btn'  onClick={calculate} >=</button>
            <button className='btn-symbol'  onClick={()=>display('/')} >/</button>

            <button className='col-span-4 bg-red-500 text-white p-4 rounded-lg' onClick={()=>setInput('')}> clear</button>
       
        

        </div>
    </div>
    </div> 
  )
}
export default Calculator