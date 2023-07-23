import React, { useState, useEffect } from 'react'
import axios from 'axios'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function BlogList(prop) {

    const [posts, setPost] = useState([])

    useEffect(() => {
      axios.get('https://647073633de51400f724471f.mockapi.io/posts')
      .then((response) => setPost(response.data))
      .catch((error) => console.log('Error fetching data:', error));
  
    }, []);

  return (
    <>
        {console.log(posts)}
        <h1>Blog list</h1>
        <Link to='/blogpost'>
        <Container fluid>
        <Row>
        {posts.map(post => (
            
            <Col xs={4}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={post.thumbnail} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.content}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        </Container>
        </Link>
    </>
  )
}
