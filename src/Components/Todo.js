import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <div className="task-container">
            <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <p 
                className={`task-text ${task.completed ? 'completed' : ""}`} 
                onClick={() => toggleComplete(task.id)}
            >
                {task.task}
            </p>
        </div>
        <div className="icons">
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}