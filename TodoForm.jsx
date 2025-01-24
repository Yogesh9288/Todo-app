import React, { useState } from 'react'

function TodoForm({addTodo,todos}) {
    const [val,setVal]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(val)
            {
                //console.log(val);
                addTodo(val);
                setVal("");
            } 
    }
  return (
    <>
    <form className='flex items-center space-x-2' onSubmit={handleSubmit}>
    <input type="text" placeholder='Enter your task.....' className='border border-gray-300 rounded-md p-2 w-full' value={val} onChange={(e)=>setVal(e.target.value)}/>
    <button className='bg-purple-300 text-black px-2 py-2 rounded-md border border-black font-semibold hover:bg-purple-500' type='submit'>ADD</button>
  </form>
   {(todos.length===0?<p className='text-center'>No Task Added</p>:"")}
   </>
  )
}

export default TodoForm