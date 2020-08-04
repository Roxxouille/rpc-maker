import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Batman from '../../assets/images/batman-5147646_1920.jpg';
import Computer from '../../assets/images/computer-4008491_1920.jpg';
import Montage from '../../assets/images/pc-4136383_1920.jpg';

const CarouselHome = () => (
  <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 test"
        src={Batman}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 test"
        src={Computer}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 test"
        src={Montage}
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default CarouselHome;
