import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import { data } from "./data";
import "./header.css";
import { useAuth } from "../../Context/authContext";
import { getAuth, signOut } from "@firebase/auth";
// import logo from "../../img/logo/logo.png";

const Header = () => {
  const history = useHistory();
  const { user, setUser } = useAuth();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setUser(null);
      console.log("Logout Successfull");
    });
  };

  return (
    <div>
      <Navbar bg="dark" className="color-bg py-3" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="navigation-brand">
            <span className="text-success">Reborn</span> Gym
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {data.map((item, index) => {
                const { link, url, icon } = item;
                return (
                  <Nav.Link
                    key={index}
                    as={Link}
                    className="d-flex align-items-center navigation-link"
                    to={url}
                  >
                    {icon}
                    {link}
                  </Nav.Link>
                );
              })}
              {user && (
                <p className="text-muted my-auto me-1">{user.displayName}</p>
              )}
              {user ? (
                <Button
                  variant="danger"
                  className="navigation-btn"
                  onClick={handleSignOut}
                >
                  Logout <BiLogIn className="ms-1" />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className="navigation-btn"
                  onClick={() => history.push("/login")}
                >
                  <BiLogIn className="me-1" /> Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
