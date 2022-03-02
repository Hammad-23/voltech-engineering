import React from "react";
import { Col, Row } from "react-bootstrap";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <Row>
        <Col
          style={{ marginTop: "15px" }}
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
        >
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={8}
            >
              <h4 className="footer-Heading-Text">Store Location</h4>
            </Col>
          </Col>
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={8}
              xl={8}
            >
              <p className="footer-Text">500 Terry Francois Street</p>
              <p className="footer-Text">San Francisco, CA 94158</p>
              <p className="footer-Text">info@mysite.com</p>
              <p className="footer-Text">03363909691</p>
            </Col>
          </Col>
          <Col
            className="footer-Icon-Main-Col"
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8}
          >
            <Col className="footer-Icon-Col" xs={6} sm={6} md={6} lg={8} xl={8}>
              <FaFacebook className="footer-Icon" size={25} />
              <FaInstagram className="footer-Icon" size={25} />
              <FaTwitter className="footer-Icon" size={25} />
              <FaYoutube className="footer-Icon" size={25} />
            </Col>
          </Col>
        </Col>
        <Col
          style={{ marginTop: "15px" }}
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
        >
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
            >
              <h4 className="footer-Heading-Text">Shop</h4>
            </Col>
          </Col>
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
            >
              <p className="footer-Text">Shop all</p>
              <p className="footer-Text">T.V Home Cinema</p>
              <p className="footer-Text">Wearable Tech</p>
              <p className="footer-Text">Drones Cameras</p>
              <p className="footer-Text">Computer</p>
              <p className="footer-Text">Tables</p>
              <p className="footer-Text">Audio</p>
              <p className="footer-Text">Mobile</p>
              <p className="footer-Text">Sale</p>
            </Col>
          </Col>
        </Col>
        <Col
          style={{ marginTop: "15px" }}
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
        >
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
            >
              <h4 className="footer-Heading-Text">Customer Support</h4>
            </Col>
          </Col>
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
            >
              <p className="footer-Text">Contact Us</p>
              <p className="footer-Text">Help Center</p>
              <p className="footer-Text">About Us</p>
              <p className="footer-Text">Careers</p>
            </Col>
          </Col>
        </Col>
        <Col
          style={{ marginTop: "15px" }}
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
        >
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
            >
              <h4 className="footer-Heading-Text">Policy</h4>
            </Col>
          </Col>
          <Col className="flex-Col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Col
              className="store-Text-Col"
              xs={12}
              sm={12}
              md={12}
              lg={10}
              xl={10}
            >
              <p className="footer-Text">Shipping & Returns </p>
              <p className="footer-Text">Terms & Conditions</p>
              <p className="footer-Text">Payment Methods</p>
              <p className="footer-Text">FAQ</p>
            </Col>
          </Col>
        </Col>
      </Row>
    </>
  );
}
