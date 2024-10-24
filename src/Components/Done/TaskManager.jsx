import React, { useState } from "react";
import Todo from "./Todo";

const TaskManager = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = () => {
    setTodos([
      ...todos,
      {
        text: newTodo,
        completed: false,
        id: Date.now(),
      },
    ]);

    setNewTodo("");
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleComplete = (id) => {
    const arr = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
          }
        : todo
    );
    setTodos(arr);
  };
  const editTodo = (id, text1) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text1 };
      }

      return todo;
    });

    setTodos(updatedTodo);
  };

  return (
    <div>
      <h1>Task Manager</h1>

      <div>
        <input
          type="text"
          placeholder="Add Task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div>
        <ul>
          {todos
            ? todos.map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default TaskManager;
