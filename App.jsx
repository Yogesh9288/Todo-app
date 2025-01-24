import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoForm from './components/todoForm'
import {v4 as uuidv4} from "uuid"
import EditTodo from './components/EditTodo'
import TodoCard from './components/TodoCard'
function App() {
  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos([
      ...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false},
    ]);
  }

  const deleteTodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!==id));
  }

  const toggleComplete=(id)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo))
  }
  const editTodo=(id)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
  }
  const editTask=(task,id)=>{
    setTodos(todos.map((todo)=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo))
  }
  return (
    <>
        <div className='flex items-center justify-center h-screen bg-purple-50'>
          <div className='w-[400px] min-h-[100px] border-[5px] border-purple-300 rounded-md p-2'>
            <h1 className='text-purple-700 font-bold text-center text-2xl'>TO-DO Buddy</h1>
           <TodoForm addTodo={addTodo} todos={todos}/>
            
            {todos.map((todo)=>todo.isEditing?
            (<EditTodo editTodo={editTask} task={todo}/>):
            (<TodoCard 
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />))}
          </div>
        </div>
    </> 
  )
}

export default App
