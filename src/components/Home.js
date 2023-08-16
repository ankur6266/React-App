import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Card, Image } from 'react-bootstrap';
import BlogList from './Blog/BlogList';
import Header from './Header';
import Blog from './Blog/Blog';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {

  const [posts, setPost] = useState([])

  useEffect(() => {
    axios.get('https://647073633de51400f724471f.mockapi.io/posts')
    .then((response) => setPost(response.data))
    .catch((error) => console.log('Error fetching data:', error));
  }, []);

  return (
    <>
        <Header />
        <CarouselSection />
        {/* <BlogList posts={posts}/> */}
        <WriteBlogSection />
    </>
  ) 
}

function CarouselSection() {
  return (
    <Carousel fade>
      <Carousel.Item>
      <Image src="https://wallpaper-house.com/data/out/11/wallpaper2you_472064.jpg" fluid />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://wallpaper-house.com/data/out/11/wallpaper2you_472068.jpg" fluid />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://wallpaper-house.com/data/out/11/wallpaper2you_472069.jpg" fluid />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
  }

function WriteBlogSection(){
    return(
      <>
      <div className='WriteBlogSection'>
        <div className='container'>
        <div>This is some text within a card body.</div>
        <Link to={`/writeBlog`} className='btn btn-primary' target=''>Write Blog</Link>
        </div>
      </div>
      </>
    )
  }