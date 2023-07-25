import React from 'react'
import Blog from '../components/Blog/Blog'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
export default function Router() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/blogpost/:id' element={<Blog />} />
    </Routes>
  )
}
