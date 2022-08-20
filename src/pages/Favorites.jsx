import React, { useState, useContext, useEffect } from "react";
import { LikedContext } from "../context/context";
import useFetching from "../hooks/useFetching";
import PostList from "../components/PostList";
import { PostService } from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import ModernLoader from "../components/UI/loader/ModernLoader";

export default function Favorites(props) {
  const loadingPosts = [];
  const [posts, setPosts] = useState([]);
  const { likedPosts, setLikedPosts } = useContext(LikedContext);
  const [fetchFavoritePosts, isLoading, error] = useFetching(async () => {
    for (let id of likedPosts) {
      loadingPosts.push((await PostService.GetPostById(id)).data);
    }
    setPosts(loadingPosts.sort((p1, p2) => p1.id - p2.id));
  });

  useEffect(() => {
    fetchFavoritePosts();
  }, []);

  useEffect(() => {
    setPosts(posts.filter((p) => likedPosts.includes(p.id)));
  }, [likedPosts]);

  const removePost = (id) => {
    setLikedPosts(likedPosts.filter((i) => i !== id));
  };

  return (
    <div className="favorites container">
      {isLoading ? (
        <ModernLoader style={{ margin: "200px auto 0" }} />
      ) : (
        <PostList
          title="Список понравившихся постов"
          removePost={removePost}
          posts={posts}
        />
      )}
    </div>
  );
}
