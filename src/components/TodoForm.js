import React, {useEffect, useRef, useState} from 'react';

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const submitHandler = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: new Date().getUTCMilliseconds(),
      text: input
    })

    setInput('');
  };

  return (
    <>
      <form className="todo-form"
            onSubmit={submitHandler}>
        {props.edit ? (
          <>
            <input
              className="todo-input edit"
              placeholder="Update your item"
              type="text"
              value={input}
              name="text"
              ref={inputRef}
              onChange={e => setInput(e.target.value)}/>
            <button
              className="todo-button edit"
              type="submit"
            >Update
            </button>
          </>
        ) : (
          <>
            <input
              className="todo-input"
              placeholder="Your to-do here"
              type="text"
              value={input}
              name="text"
              ref={inputRef}
              onChange={e => setInput(e.target.value)}/>
            <button
              className="todo-button"
              type="submit"
            >Add To-do
            </button>
          </>)}
      </form>
    </>
  );
}

export default TodoForm;