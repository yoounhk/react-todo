import React, {useEffect, useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos)
  }, [todos]);

  const addTodo = (todo) => {
    setTodos(prev =>
      [todo, ...prev]
    );
  };

  const removeTodo = (id) => {
    const removed = todos.filter(x => x.id !== id);

    setTodos(removed);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos(prev => prev.map(item => item.id === todoId ? item.text = newValue : item ));
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </>
  );
}

export default TodoList;