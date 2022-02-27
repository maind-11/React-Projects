import React, { useState } from "react";
import { useFormik } from "formik";
import { addTodo } from "../Actions/todActions";
import { useDispatch, useSelector } from "react-redux";
import "./Form.scss";
export default function Form() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");

  const formik = useFormik({
    initialValues: {
      desc: "",
      todo_date: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(addTodo(values));
      setMsg("Todo Added Successfully!");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    },
  });

  return (
    <div>
      <h2 id="msg">{msg}</h2>
      <div id="form_container">
        <h2>Add Todo</h2>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="desc">Todo Description: </label>
            <input
              id="desc"
              name="desc"
              type="text"
              value={formik.values.desc}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div id="date">
            <label htmlFor="todo_date">Pick Date: </label>
            <input
              id="todo_date"
              name="todo_date"
              type="date"
              value={formik.values.todo_date}
              onChange={formik.handleChange}
              required
            />
          </div>
          <button type="submit"> Add Todo</button>
        </form>
      </div>
    </div>
  );
}
