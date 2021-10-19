import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./links.css";
import logo from "../../../img/logo/logo.png";

const Links = () => {
  return (
    <div className="home-links">
      <Container>
        <Row className="text-light" xs={1} md={2} lg={3} className="g-4">
          <Col className="d-flex flex-column align-items-center">
            <div className="links-logo">
              <img src={logo} width="100px" alt="logo" />
            </div>
            <h2 className="links-title text-success mb-3">
              Reborn <span className="text-muted">Gym</span>
            </h2>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center ">
            <p className="fs-4 text-secondary">Quick Links</p>
            <Row>
              <Col>
                <Link className="bottom-links mb-3" to="/about">
                  About
                </Link>
              </Col>
              <Col>
                <Link className="bottom-links mb-3" to="/services">
                  Services
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link className="bottom-links" to="/shop">
                  Shop
                </Link>
              </Col>
              <Col>
                <Link className="bottom-links" to="/login">
                  Login
                </Link>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center ">
            <p className="text-muted text-center fs-5 fw-light">
              2387 Fidler Drive,
              <br /> San Antonio, Texas,
              <br /> United States
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Links;
