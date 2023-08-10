import React from 'react'
import { Image } from 'react-bootstrap';
import Header from '../Header';
import { useParams } from 'react-router-dom';

export default function Blog({posts}) {

  const postId = useParams();
  const post = posts.find((post) => post.id == parseInt(postId.postId));

  return (
    <>  
        <Header />
        {console.log(postId)}
        {
          post ? (
            <div>
              <h1>Blog post page  </h1>
              <Image src={post.thumbnail} fluid/>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ) : 
          (
            <p>Post Not Found ..!!!</p>
          )
        }

    </>
  )
}
