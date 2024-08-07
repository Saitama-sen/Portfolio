import React from "react";
import { Carousel, Form } from "react-bootstrap";
import cPic from "../images/1.jpg";
import cPic2 from "../images/2.jpg";
import cPic3 from "../images/3.jpg";

export default function Title() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={cPic}
          style={{ width: "100%", height: "600px" }}
          text="First slide"
        />
        <Carousel.Caption>
          <h3>Programming</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={cPic2}
          style={{ width: "100%", height: "600px" }}
          text="Second slide"
        />
        <Carousel.Caption>
          <h3>React Programming</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={cPic3}
          style={{ width: "100%", height: "600px" }}
          text="Third slide"
        />
        <Carousel.Caption>
          <h3>Coding</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
