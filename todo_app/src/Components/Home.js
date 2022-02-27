import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Actions/todActions";
import "./Home.scss";

export default function Home() {
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteHandler = (index) => {
    dispatch(removeTodo(index));
  };
  console.log(todoList);
  return (
    <div>
      <div id="todo_container">
        {todoList.map((todo, index) => (
          <div id="todo" key={index}>
            <h2>{todo.desc}</h2>
            <button
              onClick={() => {
                deleteHandler(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
