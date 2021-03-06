import React, { useState } from 'react'

function AddTodo(props) {

  const {addTodoItem} = props

  const [title,setTitle] = useState('')

  const handleInputChange =(e)=>{
    setTitle(e.target.value)
  }

  const addTodo=(e)=>{
    e.preventDefault()
    addTodoItem(title)
    setTitle('')
  }


  return (
    
    <form onSubmit={addTodo} className='form-container'>
        <input name='title' className='input-text' type='text' placeholder='Add Todo...' value={title} onChange={(e)=>{handleInputChange(e)}}/>
        <button className='input-submit'>Submit</button>
    </form>
    
  )
}

export default AddTodo