import { useState } from "react";

const Todo = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  const [isEditing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, text);
    }
    setEditing(!isEditing);
  };

  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
      ) : (
        <span>{todo.text}</span>
      )}

    
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
     
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default Todo;
