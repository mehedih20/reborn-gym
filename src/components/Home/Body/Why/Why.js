import React from "react";
import { Container } from "react-bootstrap";
import { FaDumbbell, FaList, FaShower, FaHeartbeat } from "react-icons/fa";
import "./why.css";

const data = [
  {
    icon: <FaDumbbell className="text-primary" />,
    name: "Quality Equipments",
  },
  {
    icon: <FaList className="text-warning" />,
    name: "Healthy Nutrition PLan",
  },
  {
    icon: <FaShower className="text-info" />,
    name: "Shower Services",
  },
  {
    icon: <FaHeartbeat className="text-danger" />,
    name: "Unique To Your Needs",
  },
];

const Why = () => {
  return (
    <section className="why">
      <Container>
        <h2 className="section-title">Why Us?</h2>
        <div className="why-container">
          {data.map((item, index) => {
            const { icon, name } = item;
            return (
              <div key={index} className="why-box">
                <span className="why-icon mb-3 d-block">{icon}</span>
                <p className="lead">{name}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Why;
