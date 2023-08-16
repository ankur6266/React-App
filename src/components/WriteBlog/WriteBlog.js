import React, { useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Header from '../Header'
import axios from 'axios'

export default function WriteBlog() {

  const [blogInfo, setBlogInfo] = useState({
    "thumbnail": "",
    "title": "Blog Title",
    "content": "Write your blog",
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    console.log(name, value);
    setBlogInfo({
      [name]: value
    })
  }

  const handleSubmit = () =>{

    // axios.post("https://647073633de51400f724471f.mockapi.io/posts", blogInfo)
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch((error) => console.log('Error in posting data:', error));
  
    console.log(blogInfo);

  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className='col-lg-8 col-sm-12'>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" name='blogTitle'
              value={blogInfo.title} placeholder="Blog Title" onChange={handleChange} />
              <label htmlFor="floatingInput">Blog Title</label>
            </div>
            <div className="form-floating"> 
              <textarea className="form-control" placeholder="Blog Content" name='blogContent'
              value={blogInfo.content} onChange={handleChange}>
                Write Your blog here...
              </textarea>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12'>
          <div className="form"> 
              <input type="file" className="form-control" placeholder="blogThumbnail" 
                value={blogInfo.thumbnail} onChange={handleChange}
              />
            </div>
          </div>
          <button className='btn btn-primary' onClick={handleSubmit}>Post</button>
        </Row>
      </Container>
    </>
  )
}
