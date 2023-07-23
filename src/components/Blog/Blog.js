import React from 'react'
import { Image } from 'react-bootstrap';
import Header from '../Header';

export default function Blog(prop) {

  return (
    <>  
        <Header />
        <h1>Blog post page  </h1>
        <Image src={prop.thumbnail} fluid/>
        <h2>{prop.title}</h2>
        <p>{prop.content}</p>
    </>
  )
}
