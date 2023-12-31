import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog/Blog'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import axios from 'axios'
import BlogList from '../components/Blog/BlogList'
import WriteBlog from '../components/WriteBlog/WriteBlog'
export default function Router() {
  
  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get('https://647073633de51400f724471f.mockapi.io/posts')
    .then((response) => setPost(response.data))
    .catch((error) => console.log('Error fetching data:', error));

  }, []);

  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Blog  posts={posts}/>} />
        <Route path="/bloglist" element={<BlogList posts={posts} />} />
        <Route path="/writeBlog" element={<WriteBlog /> } />
    </Routes>
  )
}
