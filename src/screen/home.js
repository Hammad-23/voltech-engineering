import React from "react";
import Navbars from "../components/Navbar/navbar";
import SearchNavbar from "../components/CustomNavbar/customnavbar";
import { Col, Row, Carousel, Container } from "react-bootstrap";
import Slider from "../components/Slider/slider";
import "./home.css";
import Button from "../components/Button/button";
import { FaShippingFast } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FiPercent } from "react-icons/fi";
import { RiBikeLine } from "react-icons/ri";
import Card from "../components/Card/card";
import Earpot from "../asset/images/earpots.PNG";
import AroundCards from "../components/Aroundcard";
import EarpotTwo from "../asset/images/earpottwo.png";
import Led from "../asset/images/led.png";
import Brand from "../asset/images/brand.PNG";
import NewLetter from "../components/NewLetter/newletter";
import Footer from "../components/Footer/footer";
export default function Home() {
  const cardData = [
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,

      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Earpot,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
  ];
  const aroundCardData = [
    {
      Image: EarpotTwo,
      Text: "EarPot",
    },
    {
      Image: Led,
      Text: "Led T.V",
    },
    {
      Image: EarpotTwo,
      Text: "EarPot",
    },
    {
      Image: Led,
      Text: "Led T.V",
    },
    {
      Image: EarpotTwo,
      Text: "EarPot",
    },
    {
      Image: Led,
      Text: "Led T.V",
    },
    {
      Image: EarpotTwo,
      Text: "EarPot",
    },
    {
      Image: Led,
      Text: "Led T.V",
    },
  ];
  const cardDataTwo = [
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
    {
      Img: Led,
      Name: "Earpot is the best with in charging pot",
      Price: "1500/",
    },
  ];
  return (
    <>
      <Row className="home-Page-Main-Row">
        <SearchNavbar />
        <Navbars />
        <Slider />
        <Row className="sale-Imag-Main-Row">
          <Col className="iphone-Image" xs={11} sm={11} md={10} lg={5} xl={5}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h5 className="holiday-Text">Holiday Deals</h5>
              <h2 className="up-To-30-Off-Text">Up to</h2>
              <h2 className="up-To-30-Off-Text">30% off</h2>
              <h6 className="holiday-Text">Selected Smartphone Brands</h6>
              <Button className="shop-Button" Text="Shop" />
            </Col>
          </Col>
          <Col className="iphone-Image" xs={11} sm={11} md={10} lg={5} xl={5}>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h5 className="holiday-Text">Holiday Deals</h5>
              <h2 className="up-To-30-Off-Text">Up to</h2>
              <h2 className="up-To-30-Off-Text">30% off</h2>
              <h6 className="holiday-Text">Selected Smartphone Brands</h6>
              <Button className="shop-Button" Text="Shop" />
            </Col>
          </Col>
        </Row>

        <Row className="icon-Card-Main-Row">
          <Col
            className="icon-Card-Main-Col"
            xs={11}
            sm={11}
            md={11}
            lg={11}
            xl={11}
          >
            <Col
              className="free-Shipping-Icon-Col"
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
            >
              <RiBikeLine className="icons" size={36} />
              <Col xs={4} sm={4} md={6} lg={6} xl={6}>
                <h6 className="text">Curb-side</h6>
                <h6 className="text">pickup</h6>
              </Col>
            </Col>

            <Col
              className="free-Shipping-Icon-Col"
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
            >
              <FaShippingFast className="icons" size={29} />
              <Col className="pickup-Col" xs={6} sm={6} md={6} lg={6} xl={6}>
                <h6 className="text">Free shipping on</h6>
                <h6 className="text">orders over $50</h6>
              </Col>
            </Col>

            <Col
              className="free-Shipping-Icon-Col"
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
            >
              <FiPercent className="icons" size={30} />
              <Col className="pickup-Col" xs={6} sm={6} md={6} lg={6} xl={6}>
                <h6 className="text">Low prices</h6>
                <h6 className="text">orders over $50</h6>
              </Col>
            </Col>
            <Col
              className="free-Shipping-Icon-Col"
              xs={12}
              sm={12}
              md={12}
              lg={3}
              xl={3}
            >
              <BsClockHistory className="icons" size={30} />
              <Col className="pickup-Col" xs={6} sm={6} md={6} lg={6} xl={6}>
                <h6 className="text">Available to</h6>
                <h6 className="text"> you 24/7</h6>
              </Col>
            </Col>
          </Col>
        </Row>
        <Row className="flex-Col">
          <Col className="card-Main-Col" xl={11} lg={11} md={3} sm={4} xs={12}>
            <Col
              style={{ marginTop: "15px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <h2>Best Sellers</h2>
            </Col>
            <Row className="flex-Col">
              {cardDataTwo.map((item) => {
                return (
                  <>
                    <Col
                      className="card-Col"
                      xs={11}
                      sm={11}
                      md={11}
                      lg={3}
                      xl={3}
                    >
                      <Card
                        Img={item.Img}
                        Name={item.Name}
                        Price={item.Price}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
            <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
              <Col xs={12} sm={12} md={12} lg={3} xl={3}>
                <Button Text="View All" className="view-All-Button" />
              </Col>
            </Col>
          </Col>
        </Row>
        <Row className="flex-Col">
          <Col
            className="shop-By-Category-Col"
            xs={12}
            sm={12}
            md={12}
            lg={11}
            xl={11}
          >
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h3 style={{ marginTop: "25px", marginBottom: "25px" }}>
                Shop by Category
              </h3>
            </Col>
            <Row className="flex-Col">
              {aroundCardData.map((item) => {
                return (
                  <>
                    <Col xs={11} sm={11} md={11} lg={3} xl={3}>
                      <AroundCards Img={item.Image} Text={item.Text} />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row className="flex-Col">
          <Col className="card-Main-Col" xl={11} lg={11} md={3} sm={4} xs={12}>
            <Col
              style={{ marginTop: "15px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <h2>On Sale</h2>
            </Col>
            <Row className="flex-Col">
              {cardData.map((item) => {
                return (
                  <>
                    <Col
                      className="card-Col"
                      xs={11}
                      sm={11}
                      md={11}
                      lg={3}
                      xl={3}
                    >
                      <Card
                        Img={item.Img}
                        Name={item.Name}
                        Price={item.Price}
                      />
                    </Col>
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
        <Row className="flex-Col">
          <Col
            className="shop-By-Category-Col"
            xs={12}
            sm={12}
            md={12}
            lg={11}
            xl={11}
          >
            <Col
              style={{ marginTop: "15px" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
            >
              <h1>Brands</h1>
            </Col>
            <Col className="barnd-Cols" xs={12} sm={12} md={12} lg={12} xl={12}>
              <img src={Brand} />
            </Col>
          </Col>
        </Row>
        {/* <NewLetter/> */}
      </Row>
      <Footer />
    </>
  );
}
