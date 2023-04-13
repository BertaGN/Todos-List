import React, {useState} from 'react'

export const EditTodo = ({editTodo, task}) => {
    const [value, setValue] = useState(task.todoId);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(value, task.todoId);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}