import React from "react";
import { Col, Row } from "react-bootstrap";
import "./newletter.css"
import Button from "../Button/button"
import Input from "../Input/input"

export default function NewLetter() {
    return(
        <>
        <Row className="flex-Col">
          <Col className="news-letter-Main-Col" xs={12} sm={12} md={12} lg={11}xl={11}>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1 className="new-Letter-Text-Col">Newletter</h1>
          <p className="sign-Up-To-Text">Sign up to receive updates on new arrivals and special offers</p>
          </Col>
          <Col style={{height:"150px",display:"flex",justifyContent:"center",alignItems:"center"}}
           xs={12} sm={12} md={12} lg={12} xl={12}>
             <Col style={{border:"solid red",display:"flex"}} xs={12} sm={12} md={12} lg={6} xl={6}>
             
          <Input id="email-Input" placeholder="Your Email Here : " />
          <Button id="subscribe-Button" Text="Subscribe" />
             </Col>
          </Col>
          </Col>
        </Row>
        </>
    )
    
}