import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <div className="py-5 bg-dark">
        <Container>
          <h2 className="display-6 text-success">
            <span className="text-light">Error</span> 404!
          </h2>
        </Container>
      </div>
      <Container className="d-flex flex-column align-items-center py-5">
        <h2 className="text-secondary display-6 mb-3">
          This Page is not available!
        </h2>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;
