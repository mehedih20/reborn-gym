import React from "react";
import { Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/cartContext";
import Links from "../Common/Links";

const Service = () => {
  const { services, cartList, setCartList } = useCart();
  const { id } = useParams();
  const history = useHistory();

  const item = services?.find((service) => service.id === parseInt(id));
  const { name, price, duration, shower, diet, description, url } = item;

  const handleAdd = () => {
    const list = [...cartList, item];
    setCartList(list);
    history.push("/cart");
  };

  return (
    <div>
      <div className="py-5 bg-dark">
        <Container>
          <h2 className="display-6 text-success">{name}</h2>
        </Container>
      </div>
      <Container className="mb-5 pb-5">
        {item && (
          <Row md={2} xs={1} className="p-5 mb-5 g-4">
            <Col>
              <img src={url} className="img-fluid" alt={name} />
            </Col>
            <Col>
              <h2 className="text-primary fw-light mb-3">{name}</h2>
              <p className="text-muted">{duration}</p>
              {shower && (
                <p className="text-muted">
                  {shower} <FcCheckmark style={{ marginTop: "-5px" }} />
                </p>
              )}
              {diet && (
                <p className="text-muted">
                  {diet} <FcCheckmark style={{ marginTop: "-5px" }} />
                </p>
              )}
              <p className="text-muted">{description}</p>
              <p className=" text-secondary fs-5 mb-5">
                Price: <span className="text-warning">{price}$</span>
              </p>
              <Button onClick={handleAdd} variant="danger">
                Add to Cart
              </Button>
              <Link to="/" className="ms-3 btn btn-primary">
                Home
              </Link>
            </Col>
          </Row>
        )}
      </Container>
      <Links />
    </div>
  );
};

export default Service;
