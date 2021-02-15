import React, {useState} from 'react';
import {BiEdit} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
import TodoForm from "./TodoForm";

function Todo({todos, completeTodo, removeTodo, updateTodo}) {

  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  }

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }

  return todos.map((todo, index) =>
    (<li
      className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      <div className="todo-text" onClick={() => completeTodo(todo.id)} key={todo.id}>
        {todo.text}
      </div>
      <div className="icons">
        <BiEdit className="edit-icon" onClick={() => setEdit({id: todo.id, value: todo.text})}/>
        <AiFillDelete className="delete-icon" onClick={() => removeTodo(todo.id)}/>
      </div>
    </li>)
  );
}

export default Todo;