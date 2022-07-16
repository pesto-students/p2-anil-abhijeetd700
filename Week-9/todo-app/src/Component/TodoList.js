import React, { useState } from 'react'
import styles from './TodoItem.module.css'

function TodoList(props) {
  const {todos,handleChange,deleteTodo} = props

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  return (
    <>
      {todos.map((todo)=>{
        return(
          
            <li key={todo.id} className={styles.item}>
              <input type='checkbox' className={styles.checkbox} checked={todo.completed} onChange={()=> handleChange(todo.id)}/>
              <button className={styles.button} onClick={()=>deleteTodo(todo.id)}>Delete</button>
              <span style={todo.completed?completedStyle:null}>{todo.title}</span>
            </li>
        )
      })}
    </>
  )
}

export default TodoList