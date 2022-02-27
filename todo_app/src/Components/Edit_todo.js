import React, { useState } from "react";
import { editTodo } from "../Actions/todActions";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import "./Edit_todo.scss";

export default function Edit_todo() {
  let display_form = false;
  const todoList = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState({ desc: "", date: "" });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.id]: e.target.value });
    console.log(value);
  };

  const submitHandler = (e, index) => {
    e.preventDefault();
    dispatch(editTodo(index, value));
  };
  const showEditForm = (index) => {
    display_form = !display_form;
    let tdc_el = document.getElementById("todo_container").children;
    let td_box = tdc_el.item(index).children;

    if (display_form == true) {
      td_box.item(1).style.display = "block";
    } else {
      td_box.item(1).style.display = "none";
    }
  };

  return (
    <div>
      <div id="todo_container">
        {todoList.map((todo, index) => (
          <div id="edit_todo" key={index}>
            <div id="todo">
              <h2>{todo.desc}</h2>
              <button onClick={() => showEditForm(index)}>Edit</button>
            </div>

            <div id="edit_form_container">
              <h4>Edit Todo:</h4>
              <form onSubmit={(e) => submitHandler(e, index)}>
                <div>
                  <input
                    id="desc"
                    name="desc"
                    type="text"
                    value={value.desc}
                    onChange={(e) => {
                      changeHandler(e);
                    }}
                    placeholder={todo.desc}
                    required
                  />
                </div>
                <div id="date">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={value.date}
                    onChange={(e) => changeHandler(e)}
                    required
                  />
                </div>
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
