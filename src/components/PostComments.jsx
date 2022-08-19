import React from "react";
import Loader from "../components/UI/loader/Loader";
import { LikedContext } from "../context/context";
import { Like } from "./UI/other/Like";

export default function PostComments({ comments, isLoading, ...props }) {
  //   const { likedPosts, setLikedPosts } = useContext(LikedContext);

  //   const [liked, setLiked] = useState(likedPosts.includes(post.id));

  return (
    <div className="postPage__comments">
      <h2 className="comments__h">Комментарии ({comments.length})</h2>
      {isLoading ? (
        <Loader style={{ margin: "50px auto" }} />
      ) : (
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
      )}
    </div>
  );
}
