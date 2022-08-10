import React, { useEffect } from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PostList({posts, removePost, ...props}) {
  
  return (
    posts.length
    ?
    <div className='postList'>
      <h1 style={{fontSize: '24px', textAlign: 'center', marginBottom: '20px'}}>Список постов</h1>
      <TransitionGroup>
      {
          posts.map((post) =>  
            <CSSTransition
                key={post.id}
                timeout={300}
                classNames="post"
            >
              <PostItem removePost={removePost} post={post} />
            </CSSTransition>
          )
        }
      </TransitionGroup>
    </div>
    :
    <div className='postList'>
      <h1 style={{fontSize: '24px', textAlign: 'center'}}>Посты не найдены...</h1>
    </div>
  );
}

export default PostList;