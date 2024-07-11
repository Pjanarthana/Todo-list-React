import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedValue = value.trim();
        if (trimmedValue === '') {
            setError('Task cannot be empty');
            return;
        }
        if (trimmedValue.length > 100) {
            setError('Task cannot exceed 100 characters');
            return;
        }
        addTodo(trimmedValue);
        setValue('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit} className="TodoForm">
            <input 
                type="text" 
                value={value} 
                onChange={(e) => {
                    setValue(e.target.value);
                    setError('');
                }} 
                className="todo-input" 
                placeholder='What is the task today?' 
                maxLength={100}
            />
            <button type="submit" className='todo-btn'>Add Task</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    )
}