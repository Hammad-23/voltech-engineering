import React from "react";
import "./shopall.css";
import { Row, Col } from "react-bootstrap";
import CustomNavbar from "../../components/CustomNavbar/customnavbar";
import Navbar from "../../components/Navbar/navbar";
import Earpot from "../../asset/images/earpots.PNG";
import Card from "../../components/Card/card";
import Footer from "../../components/Footer/footer";
export default function Shop() {
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
  return (
    <>
      <CustomNavbar />
      <Navbar />
      <Row>
        <Col
          className="shop-All-Text-Col"
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <p>Shop all</p>
        </Col>
      </Row>
      <Row style={{ display: "flex" }}>
        <Col xs={12} sm={12} md={12} lg={3} xl={3}>
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col className="filter-Col" xs={12} sm={12} md={12} lg={8} xl={8}>
              <p className="filter-Text">Filter by</p>
              <div className="line-Div"></div>
            </Col>
          </Col>
          <Col className="flex-Col" xs={12} sm={12} md={12} xl={12} lg={12}>
            <Col className="filter-Col" xs={12} sm={12} md={12} lg={8} xl={8}>
              <p className="collection-Text">Collection</p>
              <p className="side-Bar-Text">Sale</p>
              <p className="side-Bar-Text">Best Sellers</p>
              <p className="side-Bar-Text">Computer</p>
              <p className="side-Bar-Text">Tables</p>
              <p className="side-Bar-Text">Drone Cameras</p>
              <p className="side-Bar-Text">Headphone</p>
              <p className="side-Bar-Text">Speakers</p>
              <p className="side-Bar-Text">Mobile</p>
              <div className="line-Div"></div>
            </Col>
          </Col>
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col className="filter-Col" xs={12} sm={12} md={12} lg={8} xl={8}>
              <p>Price</p>
            </Col>
          </Col>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={9}
          xl={9}
          //   style={{ border: "solid red" }}
        >
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
                    <Card Img={item.Img} Name={item.Name} Price={item.Price} />
                  </Col>
                </>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
