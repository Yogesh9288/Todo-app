import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function TodoCard({ task , deleteTodo, toggleComplete,editTodo}) {
  return (
    <div className="flex w-full mt-4 border-2 border-purple-400 p-2 rounded-md bg-purple-400 items-center">
      {/* Checkbox */}
      <input 
        type="checkbox" 
        id={task.id} 
        className="peer hidden"
        onChange={()=>toggleComplete(task.id)}
      />
      <label 
        htmlFor={task.id} 
        className="mr-2 h-5 w-5 border-2 border-gray-500 rounded cursor-pointer flex items-center justify-center peer-checked:bg-green-400   peer-checked:border-green-500 peer-checked:before:content-['✅'] peer-checked:before:text-white"
      ></label>

      {/* Task text with line-through on checked */}
      <p className="w-[80%]  peer-checked:line-through">
        {task.task}
      </p>

      {/* Edit and Delete Icons */}
      <div className="flex gap-4">
        <FaEdit className="text-xl cursor-pointer" onClick={()=>editTodo(task.id)} />
        <FaTrash className="text-xl cursor-pointer" onClick={()=>deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default TodoCard;