import React, { useState } from 'react';
import { Container, Row, Toast } from 'react-bootstrap';
import Header from '../Header/Header';
import '../../assets/styles/writeBlog.css'
import axios from 'axios';

export default function WriteBlog() {

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const [blogInfo, setBlogInfo] = useState({
    // thumbnail: '',
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name,value);
    setBlogInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    console.log(name,files[0]);
    setBlogInfo((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = () => {
    // const formData = new FormData();
    // formData.append('thumbnail', blogInfo.thumbnail);
    // formData.append('title', blogInfo.title);
    // formData.append('content', blogInfo.content);

    if(blogInfo.title.length === 0 || blogInfo.content.length === 0){
      toggleShowA();
    }
    else{
    
      axios
      .post('https://647073633de51400f724471f.mockapi.io/posts', blogInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log('Error in posting data:', error));

      toggleShowB();
      console.log(blogInfo);

    }
  
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="col-lg-8 col-sm-12">
            <div className="form mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                name="title"
                value={blogInfo.title}
                placeholder="Blog Title"
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <textarea rows="10"
                className="form-control"
                placeholder="Blog Content"
                name="content"
                value={blogInfo.content}
                onChange={handleChange}
              >
                Write Your blog here...
              </textarea>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="form">
              <input
                type="file"
                className="form-control"
                name="thumbnail"
                onChange={handleFileChange}
              />
            </div>

            <button className="btn btn-primary m-3" onClick={handleSubmit}>
              Post
            </button>
            
          <Toast className='warn-toastBody' onClose={toggleShowA} show={showA} animation={true}>
          <Toast.Body>Please enter 'Blog Title' and 'Blog Content'</Toast.Body>
          </Toast>

          <Toast className='success-toastBody' onClose={toggleShowB} show={showB} animation={true}>
          <Toast.Body>Blopg Posted</Toast.Body>
          </Toast>

          </div>

        </Row>
      </Container>

    </>
  );
}