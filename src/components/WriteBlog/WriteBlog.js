import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import Header from '../Header'

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

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className='col-lg-8 col-sm-12'>
            <div class="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" name='blogTitle'
              value={blogInfo.title} placeholder="Blog Title" onChange={handleChange} />
              <label for="floatingInput">Blog Title</label>
            </div>
            <div class="form-floating"> 
              <textarea className="form-control" placeholder="Blog Content" name='blogContent'
              value={blogInfo.content} onChange={handleChange}>
                Write Your blog here...
              </textarea>
            </div>
          </div>
          <div className='col-lg-4 col-sm-12'>
          <div class="form"> 
              <input type="file" className="form-control" placeholder="blogThumbnail" 
                value={blogInfo.thumbnail} onChange={handleChange}
              />
            </div>
          </div>
        </Row>
      </Container>
    </>
  )
}
