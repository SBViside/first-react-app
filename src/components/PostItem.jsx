import React from 'react';
import MyButton from './UI/button/MyButton';


function PostItem({post, removePost, ...props}) {
  return (
    <div className='post'>
        <div style={{width: '85%'}}>
          <h1 style={{marginBottom: '5px'}}>{post.id}. {post.title}</h1>
          <p style={{wordWrap: 'break-word'}}>{post.body}</p>
        </div>  
        <MyButton onClick={() => removePost(post.id)}>Удалить</MyButton>
    </div>
  );
}

export default PostItem;