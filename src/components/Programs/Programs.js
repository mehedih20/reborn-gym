import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Links from "../Common/Links";
import "./program.css";

const Programs = () => {
  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    fetch("./public.json")
      .then((res) => res.json())
      .then((data) => setProgramList(data.programmes));
  }, []);

  return (
    <div style={{ paddingTop: "120px" }}>
      <div className="py-5 bg-dark">
        <Container>
          <h2 className="display-6 text-success">
            <span className="text-light">Our</span> Programmes :
          </h2>
        </Container>
      </div>
      <div className="program-container pb-5">
        <Container>
          {programList.map((program, index) => {
            const { name, url, description } = program;
            if (index % 2 === 0) {
              return (
                <Row className="my-5 py-5 g-4" md={2} xs={1} key={index}>
                  <Col className="left-program-img">
                    <div className="program-img">
                      <img src={url} alt={name} />
                    </div>
                  </Col>
                  <Col className="d-flex flex-column justify-content-center">
                    <h2 className="text-light">{name}</h2>
                    <p className="lead text-secondary">{description}</p>
                  </Col>
                </Row>
              );
            } else {
              return (
                <Row className="my-5 py-3 g-4" md={2} xs={1} key={index}>
                  <Col className="left-program-text">
                    <h2 className="text-light">{name}</h2>
                    <p className="lead text-secondary">{description}</p>
                  </Col>
                  <Col className="right-program-img">
                    <div className="program-img">
                      <img src={url} alt={name} />
                    </div>
                  </Col>
                </Row>
              );
            }
          })}
        </Container>
      </div>
      <Links />
    </div>
  );
};

export default Programs;
