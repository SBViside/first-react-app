import React, { useState, useEffect } from "react";
import useFetching from "../hooks/useFetching";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { Link, useParams } from "react-router-dom";
import PostComments from "../components/PostComments";
import { Like } from "../components/UI/other/Like";

export default function Post(props) {
  const params = useParams();
  const [post, setPost] = useState({});
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
        <div className="postButtons">
          <Like postId={post.id} />
        </div>
        <PostComments comments={comments} isLoading={isCommLoading} />
      </div>
      <Link to="/posts" className="backToPosts">
        Назад к постам
      </Link>
    </div>
  );
}
