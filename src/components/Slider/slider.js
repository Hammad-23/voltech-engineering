import React from "react";
import { Carousel } from "react-bootstrap";
import Laptop from "../../asset/images/Laptop.PNG";
import Drone from "../../asset/images/drones.PNG";
import Headphone from "../../asset/images/headphone.PNG";
import Button from "../Button/button";
import "./slider.css";
export default function Slider() {
  return (
    <>
      <Carousel>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={Laptop}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              Incredible Prices on All Your Favorite Items
            </h3>
            <p style={{ color: "black" }}>
              Get more for less on selected brands
            </p>
            <Button className="slider-Button" Text={"Shop"} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={Drone}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              Incredible Prices on All Your Favorite Items
            </h3>
            <p style={{ color: "black" }}>
              Get more for less on selected brands
            </p>
            <Button className="slider-Button" Text={"Shop"} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "400px" }}>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src={Headphone}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: "black" }}>
              Incredible Prices on All Your Favorite Items
            </h3>
            <p style={{ color: "black" }}>
              Get more for less on selected brands
            </p>
            <Button className="slider-Button" Text={"Shop"} />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
