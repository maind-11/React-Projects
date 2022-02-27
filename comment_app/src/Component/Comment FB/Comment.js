import React, { useEffect, useState } from "react";
import "./Comment.scss";

export default function Comment() {
  let image_src =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";
  let userName = "Suraj Singh";

  let comment = {
    username: "",
    img: "",
    value: "",
  };

  const [commentList, setList] = useState([]);
  const [editedValue, setEditedValue] = useState("");

  const addPost = () => {
    let textarea = document.getElementById("textarea");

    if (textarea.value === "") {
      alert("Comment Field is empty.");
    } else {
      setList((commentList) => {
        comment.username = userName;
        comment.img = image_src;
        comment.value = textarea.value;
        return [...commentList, comment];
      });
    }
  };

  const deleteComment = (index) => {
    setList((commentList) => commentList.splice(index, 1));
  };

  const showEditComment = (index) => {
    let elements = document.getElementById("comment_box").children;
    let comment = elements.item(index).children;
    comment.item(1).style.display = "none";
    comment.item(2).style.display = "flex";
    comment.item(3).style.display = "none";
  };

  const hideEditComment = (index) => {
    let elements = document.getElementById("comment_box").children;
    let comment = elements.item(index).children;
    comment.item(1).style.display = "block";
    comment.item(2).style.display = "none";
    comment.item(3).style.display = "block";
  };

  const editInputHandler = (e) => {
    setEditedValue(e.target.value);
  };

  const editComment = (index) => {
    let updatedList = [...commentList];
    updatedList[index].value = editedValue;
    setList(updatedList);
    hideEditComment(index);
  };

  return (
    <div id="container">
      <header>
        <h1>Comment Assignment</h1>
      </header>

      <section id="comment_form">
        <img src={image_src} alt="profile"></img>
        <div id="input">
          <textarea id="textarea" placeholder="Add a comment..."></textarea>
          <button onClick={addPost}>Post</button>
        </div>
      </section>

      <section id="comment_box">
        {commentList.map((comment, index) => {
          return (
            <div key={index} id="comment">
              <img src={comment.img}></img>

              <div id="comment_content" onClick={() => showEditComment(index)}>
                <h4>{comment.username}</h4>
                <p>{comment.value}</p>
              </div>

              <div id="edit_comment">
                <h4>{comment.username}</h4>
                <input
                  defaultValue={comment.value}
                  id="edit_input"
                  onChange={(e) => editInputHandler(e)}
                ></input>
                <button id="save" onClick={() => editComment(index)}>
                  save
                </button>
              </div>

              <button id="delete" onClick={() => deleteComment(index)}>
                x
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}
