import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./gallery.css";
import photo1 from "../../../../img/gym/program-1.jpg";
import photo2 from "../../../../img/gym/program-3.jpg";
import photo3 from "../../../../img/gym/program-4.jpg";
import photo4 from "../../../../img/gym/program-5.jpg";
import photo5 from "../../../../img/gym/program-6.jpg";
import photo6 from "../../../../img/gym/program-1.jpg";
import photo7 from "../../../../img/gym/service-1.jpg";
import photo8 from "../../../../img/gym/service-2.jpg";
import photo9 from "../../../../img/gym/service-3.jpg";
import photo10 from "../../../../img/gym/service-4.jpeg";
import photo11 from "../../../../img/gym/service-5.jpeg";

const imgList = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="gallery">
      <h2 className="section-title">Gallery</h2>
      <Container>
        <Carousel
          className=" mx-auto gallery-carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          {imgList.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 carousel-img"
                  src={item}
                  alt="Second slide"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default Gallery;
