import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function PostForm(props) {
  
  const [post, setPost] = useState({title: '' , body: ''});
  
  const addPost= (e) => {
    e.preventDefault();
    props.createPost(post);
    setPost({title: '', body: ''});
  }
  
  return ( 
    <form className='postForm'>
        <MyInput value={post.title} onChange={(e) => setPost({...post, title: e.target.value})} style={{
          width: '100%',
          fontWeight: '700'
        }} type="text" placeholder='Название поста...' />
        <MyInput value={post.body} onChange={(e) => setPost({...post, body: e.target.value})} style={{
          width: '100%'
        }} type="text" placeholder='Содержимое поста...' />
        <MyButton onClick={addPost} style={{marginTop: '15px'}}>Отправить</MyButton>
    </form>
  );
}

export default PostForm;