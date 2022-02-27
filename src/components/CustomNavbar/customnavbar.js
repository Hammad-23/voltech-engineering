import React from "react";
import "./customnavbar.css";
import Input from "../Input/input";
import Button from "../Button/button";
import { Row, Col } from "react-bootstrap";
import { GrSearch, GrFavorite } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
export default function UserNavbar() {
  return (
    <>
      <Row className="main-Row">
        <Col className="heading-Col" xs={12} sm={12} md={4} lx={4} xl={4}>
          <h3>Voltech Engineering</h3>
        </Col>
        <Col className="heading-Col" xs={12} sm={12} md={4} lx={4} xl={4}>
          <Col
            className="search-input-Icon-Col"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Input id="search-Input" placeholder="Search...." type={"text"} />
            <Button
              id="search-Button"
              Icon={<GrSearch color="red" size={15} />}
            />
          </Col>
        </Col>
        <Col id="user-Lgin-Fav-Icon-Col" xs={12} sm={12} md={4} lg={3} xl={3}>
          <FaUserCircle size={20} />
          <span>Login</span>
          <GrFavorite size={20} />
          <span>Favorites</span>
          <FiShoppingCart size={20} />
          <span>0</span>
        </Col>
      </Row>
    </>
  );
}
