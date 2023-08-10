import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './blog.css'

export default function BlogList({posts}) {

    // const [posts, setPost] = useState([])

    // useEffect(() => {
    //   axios.get('https://647073633de51400f724471f.mockapi.io/posts')
    //   .then((response) => setPost(response.data))
    //   .catch((error) => console.log('Error fetching data:', error));
  
    // }, []);

  return (
    <>
        <h1>Blog list</h1>
        <Container fluid>
        <Row className='blogRow'>
        {posts.map(post => (
            
            <Col xs={4} className='cardColumn'>
            
            <Link to={`/post/${post.id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.thumbnail} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className='cardText'>
                    {post.content}
                    </Card.Text>
                    <Link to='/blogpost/:1'>
                       <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>
            </Link>

            </Col>
        ))}
        </Row>
        </Container>
    </>
  )
}
