import React, { useState, useEffect } from "react";
import useFetching from "../hooks/useFetching";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { Link, useParams } from "react-router-dom";

export default function Post(props) {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [getPost, isLoading, error] = useFetching(async () => {
    const response = await PostService.GetPostById(params.id);
    setPost(response.data);
  });
  const [getComments, isCommLoading, commError] = useFetching(async () => {
    const response = await PostService.GetCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    getPost();
    getComments();
  }, []);

  return isLoading ? (
    <Loader style={{ margin: "100px auto 0" }} />
  ) : (
    <div className="postPage container">
      <div>
        <h1 className="postPage__h">
          {post.id}. {post.title}
        </h1>
        <p className="postPage__body">{post.body}</p>
        <div className="postPage__comments">
          <h2 className="comments__h">Комментарии ({comments.length})</h2>
          <div className="comments__list">
            {comments.map((c) => (
              <div key={c.id} className="comments__item">
                <h2>
                  {c.name} /{" "}
                  <a className="comments__mail" href={`mailto:${c.email}`}>
                    {c.email}
                  </a>
                </h2>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/posts" className="backToPosts">
        Назад к постам
      </Link>
    </div>
  );
}
