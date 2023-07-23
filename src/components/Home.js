import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { Image } from 'react-bootstrap';
import BlogList from './Blog/BlogList';
import Header from './Header';
import Blog from './Blog/Blog';

export default function Home() {

  return (
    <>
        <Header />
        <CarouselFadeExample />
        <BlogList />
        <Blog />
    </>
  ) 
}

function CarouselFadeExample() {
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