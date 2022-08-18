import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";
import { Like } from "./UI/other/Like";

function PostItem({ post, removePost, ...props }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const deleteThis = (e) => {
    e.stopPropagation();
    removePost(post.id);
  };

  const like = (e) => {
    e.stopPropagation();
    liked ? setLiked(false) : setLiked(true);
  };

  return (
    <div className="post" onClick={() => navigate(`/posts/${post.id}`)}>
      <div style={{ width: "85%" }}>
        <h1 style={{ marginBottom: "5px" }}>
          {post.id}. {post.title}
        </h1>
        <p style={{ wordWrap: "break-word" }}>{post.body}</p>

        <div className="postButtons">
          <Like setLike={like} checked={liked} />
        </div>
      </div>
      <MyButton style={{ alignSelf: "center" }} onClick={deleteThis}>
        Удалить
      </MyButton>
    </div>
  );
}

export default PostItem;
