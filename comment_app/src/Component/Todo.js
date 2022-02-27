import React, { useEffect, useState } from "react";
import "./Todo.scss";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState();

  const addTodo = (e) => {
    e.preventDefault();
    setTodoList((todoList) => [...todoList, todo]);
  };

  const deleteTodo = (index) => {
    setTodoList((todoList) => todoList.splice(index, 1));
  };

  const changeHandler = (e) => {
    let todo = e.target.value;
    setTodo(todo);

    if (!(todo.charAt(0) === todo.charAt(0).toUpperCase())) {
      setError("First letter should be capital");
      document.getElementById("todo_desc").style.borderColor =
        "rgb(245, 106, 106)";
      setValid(false);
    } else {
      setError("");
      document.getElementById("todo_desc").style.borderColor = "black";
      setValid(true);
    }
  };

  return (
    <div>
      <header id="header_todoApp">
        <h1>Todo Application</h1>
      </header>

      <section id="form">
        <form onSubmit={(e) => addTodo(e)}>
          <h3>Add New Todo</h3>
          <div>
            <label htmlFor="todo_desc">Description</label>
            <br />
            <input
              id="todo_desc"
              type="text"
              value={todo}
              onChange={(e) => {
                changeHandler(e);
              }}
            />
          </div>
          <div id="error">{error}</div>
          <button type="submit" disabled={!valid}>
            Add
          </button>
        </form>
      </section>

      <section id="todoList">
        {todoList.map((todo, index) => {
          return (
            <div key={index} id="todo">
              <h3>{todo}</h3>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          );
        })}
      </section>
    </div>
  );
}
