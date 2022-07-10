import React, { useState } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

function TodoContainer() {
  const [todos,setTodos] = useState([
    {
      id:uuidv4(),
      title:'Study',
      completed:false
    },
    {
      id:uuidv4(),
      title:'Sleep',
      completed:false
    },
    {
      id:uuidv4(),
      title:'Code',
      completed:false
    }
  ])

  const handleChange = (id)=>{
    setTodos(
      todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
    }))
  }

  const deleteTodo = (id)=>{
    setTodos(
      todos.filter((todo)=>{
      if(todo.id !== id){
        return todo
      }
    }))
  }

  const addTodoItem =(title)=>{
    // console.log(title)
    const newTodo = {
      id:uuidv4(),
      title:title,
      completed:false
    }
    console.log(newTodo)
    setTodos([...todos,newTodo])
  }
    
  return (
    <div className='container'>
      <div className='inner'>
        <h1 style={{
            fontSize: "6rem",
            fontWeight: "600",
            marginBottom: "2rem",
            color: 'black',
            textTransform: "lowercase",
            textAlign: "center",
            padding: "20px 0",
            lineHeight: "1.5em"
        }}>To-do's</h1>
        <InputTodo addTodoItem={addTodoItem}/>
        <ul>
          <TodoList todos={todos} handleChange={handleChange} deleteTodo={deleteTodo}/>
        </ul>
      </div>
    </div>
  )
}

export default TodoContainer