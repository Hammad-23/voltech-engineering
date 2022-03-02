import React from "react";
import "./card.css";
import Button from "../Button/button";
import { Container, Row, Col } from "react-bootstrap";
export default function Card(props) {
  return (
    <>
      <div className="card-Image">
        <div className="zoom-Image">
          <figure>
            <img src={props.Img} />
          </figure>
        </div>
      </div>
      <span className="name-Text">{props.Name}</span>
      <p className="price-Text">{props.Price}</p>
    </>
  );
}
