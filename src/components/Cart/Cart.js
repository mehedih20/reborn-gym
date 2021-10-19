import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useCart } from "../../Context/cartContext";
import { IoTrashBinSharp } from "react-icons/io5";
import Links from "../Common/Links";

const Cart = () => {
  const { cartList, setCartList } = useCart();
  const cartMonney = cartList.map((item) => item.price);
  const total = cartMonney.reduce((a, b) => a + b, 0);
  const tax = (total * 0.2).toFixed(2);
  const sum = (parseFloat(total) + parseFloat(tax)).toFixed(2);

  const handlePayment = () => {
    setCartList([]);
  };

  const handleRemove = (id) => {
    const newList = cartList.filter((item) => item.id !== id);
    setCartList(newList);
  };

  return (
    <div>
      <div className="py-5 bg-dark">
        <Container>
          <h2 className="display-6 text-success">
            <span className="text-light">Your</span> Cart :
          </h2>
        </Container>
      </div>
      <Container className="py-5 mb-5">
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <h2 className="text-secondary text-decoration-underline mb-3">
              Items
            </h2>
            <div>
              {cartList &&
                cartList.map((item) => {
                  const { id, name } = item;
                  return (
                    <div
                      key={id}
                      className="d-flex justify-content-between align-items-center border border-warning p-3 text-secondary rounded my-3"
                    >
                      <p className="m-0">{name}</p>
                      <Button
                        onClick={() => handleRemove(id)}
                        variant="outline-light p-0 border-0"
                      >
                        <IoTrashBinSharp className="text-success d-flex" />
                      </Button>
                    </div>
                  );
                })}
            </div>
          </Col>
          <Col className="p-5">
            <div className="d-flex flex-column border border-2 p-3 border-secondary rounded">
              <h2 className=" text-center text-success fw-light">Total</h2>
              <p className="text-secondary">Price : {total.toFixed(2)}$</p>
              <p className="text-secondary">Tax : {tax}$</p>
              <p className="text-secondary">Grand total : {sum}$</p>
              <Button
                variant="danger"
                className="mx-auto"
                onClick={handlePayment}
              >
                Confirm payment!
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Links />
    </div>
  );
};

export default Cart;
