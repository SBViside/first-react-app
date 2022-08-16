import React from "react";
import MyButton from "./UI/button/MyButton";
import { Navigate, Link, useNavigate } from "react-router-dom";

function PostItem({ post, removePost, ...props }) {
  const navigate = useNavigate();

  const deleteThis = (e) => {
    e.stopPropagation();
    removePost(post.id);
  };

  return (
    <div className="post" onClick={() => navigate(`/posts/${post.id}`)}>
      <div style={{ width: "85%" }}>
        <h1 style={{ marginBottom: "5px" }}>
          {post.id}. {post.title}
        </h1>
        <p style={{ wordWrap: "break-word" }}>{post.body}</p>
      </div>
      <MyButton onClick={deleteThis}>Удалить</MyButton>
    </div>
  );
}

export default PostItem;
