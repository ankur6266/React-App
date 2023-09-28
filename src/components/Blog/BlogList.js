import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../../assets/styles/blog.css' 
import Header from '../Header/Header';

export default function BlogList({posts}) {

  return (
    <>
        <Header />
        <h1>Blog list</h1>
        <Container>
        <Row className='blogRow'>
        {posts.map(post => ( 
            <Col lg={4} className='cardColumn'>
            
            <Card>
                <Card.Img variant="top" src={post.thumbnail} />
                <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text className='cardText'>
                    {post.content}
                    </Card.Text>          
                       <Link to={`/post/${post.id}`} className='btn btn-primary'>Read More</Link>
          
                </Card.Body>
            </Card>
            
            </Col>
        ))}
        </Row>
        </Container>
        <div className='mainBox'>

          <div className='inner'>one</div>
          <div className='inner'>two</div>


        </div>
    </>
  )
}
