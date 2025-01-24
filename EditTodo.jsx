import React, { useState } from 'react'

function EditTodo({editTodo,task}) {
    const [val,setVal]=useState(task.task);
    const handleSubmit=(e)=>{
         e.preventDefault();
         editTodo(val,task.id);
    }
  return (
    <form className='flex items-center space-x-2 mt-2' onSubmit={handleSubmit}>
    <input type="text" placeholder='Update Task...' className='border border-gray-300 rounded-md p-2 w-full' value={val} onChange={(e)=>setVal(e.target.value)}/>
    <button className='bg-green-300 text-black px-2 py-2 rounded-md border border-black font-semibold hover:bg-green-400' type='submit'>Update</button>
  </form>
  )
}

export default EditTodo