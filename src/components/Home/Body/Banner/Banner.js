import React from "react";
import { Container } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <Container
        style={{ height: "100%" }}
        className="d-flex justify-content-between"
      >
        <div className="d-flex flex-column justify-content-center">
          <h2 className="display-5 fw-light text-light">Let us reborn again</h2>
          <p className="lead text-secondary mb-3">
            With a new version of ourself!
          </p>
          <p className="display-2 text-light mb-5">
            <span className="text-success">Reborn</span> Gym
          </p>
          <button className="btn btn-warning align-self-start">
            Explore gym
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
