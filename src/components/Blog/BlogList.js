import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './blog.css' 

export default function BlogList({posts}) {

  return (
    <>
        <h1>Blog list</h1>
        <Container>
        <Row className='blogRow'>
        {posts.map(post => ( 
            <Col lg={4} className='cardColumn'>
            <Link to={`/post/${post.id}`}>
            <Card>
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
