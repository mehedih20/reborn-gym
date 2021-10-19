import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FcCheckmark } from "react-icons/fc";
import "./homeServices.css";

const HomeServices = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("./public.json")
      .then((res) => res.json())
      .then((data) => {
        setList(data.services);
      });
  }, []);

  return (
    <div className="home-services">
      <Container>
        <h2 className="section-title">Services</h2>
        <div className="home-services-container mt-5">
          {list.map((item, index) => {
            const { name, duration, shower, diet, description, price, url } =
              item;
            return (
              <div key={index} className="home-services-box">
                <div className="services-img">
                  <img src={url} alt={name} />
                </div>
                <p className="fs-4 text-light">{name}</p>
                <p className="text-warning fs-4">{price} $</p>
                <p className="text-muted">Duration: {duration}</p>
                {shower && (
                  <p className="text-muted">
                    <FcCheckmark style={{ marginTop: "-5px" }} /> {shower}
                  </p>
                )}
                {diet && (
                  <p className="text-muted">
                    <FcCheckmark style={{ marginTop: "-5px" }} /> {diet}
                  </p>
                )}
                <p className="text-muted">{description}</p>
                <Button className="mt-auto" variant="warning">
                  Show more
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default HomeServices;
