import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import { PostService } from "../API/PostService";
import useFetching from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import Filter from "../components/Filter";
import { usePosts } from "../hooks/usePosts";
import MyModal from "../components/UI/modal/MyModal";
import { getClearID, getCountOfPages } from "../utils/utils";
import PageController from "../components/PageController";
import ModernLoader from "../components/UI/loader/ModernLoader";

function Posts() {
  document.title = `Список постов`;

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(null);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.GetByLimitAndPage(limit, page);
    setPosts(response.data);
    setTotalCount(+response.headers["x-total-count"]);
  });

  useEffect(() => {
    fetchPosts();
  }, [page, limit]);

  const createPost = (post) => {
    setModal(false);
    setPosts([...posts, { id: getClearID(posts), ...post }]);

    // need to change
    document.getElementsByClassName("pageSelector")[0].scrollIntoView(true);
  };

  const removePost = (id) => setPosts(posts.filter((post) => post.id !== id));

  return (
    <div className="container">
      <Filter filter={filter} setFilter={setFilter} openModal={setModal} />
      {isPostsLoading ? (
        <ModernLoader style={{ margin: "150px auto" }} />
      ) : (
        <div>
          <PostList
            title="Список всех постов"
            removePost={removePost}
            posts={sortedAndSearchedPosts}
          />
          <PageController
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
            totalPages={getCountOfPages(totalCount, limit)}
          />
        </div>
      )}
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
    </div>
  );
}

export default Posts;
