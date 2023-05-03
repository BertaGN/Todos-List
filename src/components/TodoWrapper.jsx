import React, { useEffect, useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { EditTodo } from "./EditTodo";


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos, todo]);
  }

  const deleteTodo = async (todoId) => {
    const res = await fetch(`http://localhost:4000/todo/${todoId}`, {
      method: "DELETE",
    })
    const data = await res.json()
    if (data.ok) {
      const filteredTodos = todos.filter((todo) => {
        return todo.todoId != todoId
      })
      setTodos(filteredTodos)
    }
  };

  const toggleComplete = (id) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, completed: !todo.completed } : todo
    //   )
    // );
  }

  const editTodo = (id) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    //   )
    // );
  }

  const editTask = (task, id) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    //   )
    // );
  };
  const getToDos = async () => {
    const res = await fetch("http://localhost:4000/todo")
    const data = await res.json()
    setTodos(data.todos);
    console.log(todos)

  }
  useEffect(() => {
    getToDos()
  }, [])
console.log(todos)
  return (
    <div className="TodoWrapper">
      <h1>Add task</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length ? todos.map((todo) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      ):<p>Nothing Here</p>}
    </div>
  );
};