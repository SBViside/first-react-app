import React, { useEffect, useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import { PostService } from './API/PostService';
import useFetching from './hooks/useFetching';
import Loader from './components/UI/loader/Loader';
import Filter from './components/Filter';
import { usePosts } from './hooks/usePosts';
import MyModal from './components/UI/modal/MyModal';
import { getArrayByNumber, getClearID, getCountOfPages } from './utils/utils';
import MyButton from './components/UI/button/MyButton';
import PageController from './components/PageController';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalCount, setTotalCount] = useState(null);
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.GetByLimitAndPage(limit, page);
    setPosts(response.data);
    setTotalCount(+response.headers['x-total-count']);
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);
  
  const createPost = (post) => {
    setModal(false);
    setPosts([...posts, {id: getClearID(posts), ...post}]);
  }

  const removePost = (id) => setPosts(posts.filter(post => post.id !== id));
  
  return (  
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} openModal={setModal}/>
      {
        isPostsLoading 
        ? <Loader style={{margin: '251px auto'}} />
        : <PostList removePost={removePost} posts={sortedAndSearchedPosts} />
      }
      <PageController page={page} setPage={setPage} totalPages={getCountOfPages(totalCount, limit)} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
    </div>
  );
}

export default App;
