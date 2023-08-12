import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
<head>
<script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script>;
</head>


function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
         className="d-block mx-auto "
          src="https://typeset-beta.imgix.net/2017/3/9/07afb129-da88-4557-ba41-2a27bb3a9e5d.png?w=740&h=437&fit=crop&crop=faces&auto=format&q=70"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block mx-auto"
          src="https://typeset-beta.imgix.net/rehost/2017/3/9/872145c3-14a4-470c-af52-3fd359b28e7f.jpg?w=740&h=740&fit=crop&crop=faces&auto=format&q=70"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
         className="d-block mx-auto"
          src="https://typeset-beta.imgix.net/rehost/2017/3/9/cdf69c9f-ca06-40f8-840e-e5b2de395c45.jpg?w=740&h=723&fit=crop&crop=faces&auto=format&q=70"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}
  

export default CarouselComponent;
