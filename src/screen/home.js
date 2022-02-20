import React from "react";
import Navbars from "../components/Navbar/navbar";
import SearchNavbar from "../components/CustomNavbar/customnavbar";
import { Col, Row, Carousel } from "react-bootstrap";
import Slider from "../components/Slider/slider";
import "./home.css";
import Button from "../components/Button/button";
export default function Home() {
  return (
    <>
      <SearchNavbar />
      <Navbars />
      <Slider />
      <Row className="sale-Imag-Main-Row">
        <Col className="iphone-Image" xs={12} sm={12} md={12} lg={5} xl={5}>
          <Col
            className="sale-Image-Text-Col"
            xs={12}
            sm={12}
            md={12}
            lg={10}
            xl={10}
          >
            <h5 className="holiday-Text">Holiday Deals</h5>
            <h2 className="up-To-30-Off-Text">Up to</h2>
            <h2 className="up-To-30-Off-Text">30% off</h2>
            <h6 className="holiday-Text">Selected Smartphone Brands</h6>
            <Button className="shop-Button" Text="Shop" />
          </Col>
        </Col>
        <Col className="iphone-Image" xs={12} sm={12} md={12} lg={5} xl={5}>
          <Col
            className="sale-Image-Text-Col"
            xs={12}
            sm={12}
            md={12}
            lg={10}
            xl={10}
          >
            <h5 className="holiday-Text">Holiday Deals</h5>
            <h2 className="up-To-30-Off-Text">Up to</h2>
            <h2 className="up-To-30-Off-Text">30% off</h2>
            <h6 className="holiday-Text">Selected Smartphone Brands</h6>
            <Button className="shop-Button" Text="Shop" />
          </Col>
        </Col>
      </Row>
    </>
  );
}
