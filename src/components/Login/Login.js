import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useAuth } from "../../Context/authContext";
import { FcGoogle } from "react-icons/fc";
import "./login.css";

const Login = () => {
  const {
    emailLogin,
    createNewUser,
    formMsg,
    setFormMsg,
    isLoading,
    setIsLoading,
    googleSignIn,
  } = useAuth();
  const [isUser, setIsUser] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setFormMsg("Password must be at least 6 characters!");
      return;
    } else {
      if (isUser && email && password) {
        emailLogin(email, password);
      } else if (!isUser && email && password) {
        createNewUser(email, password, username);
      }
      setIsLoading(true);
      setFormMsg("");
      setEmail("");
      setPassword("");
      setUsername("");
    }
  };

  const handleLoginCheck = () => {
    setIsUser(!isUser);
    if (formMsg) {
      setFormMsg("");
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn();
  };

  return (
    <Container className="d-flex justify-content-center">
      <div className="login">
        <h2 className="login-title text-light">
          {isUser ? "Login" : "Sign Up"}
        </h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isUser && (
            <input
              type="text"
              placeholder="Name"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className="text-warning mb-3">{formMsg}</small>

          {isLoading ? (
            <button type="submit" className="btn btn-primary px-5">
              <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </button>
          ) : (
            <button type="submit" className="btn btn-primary px-5">
              {isUser ? "Login" : "Sign Up"}
            </button>
          )}
        </form>
        <div className="d-flex align-items-center m-3">
          <p className="text-muted m-0">
            {isUser ? "Don't have a account?" : "Already have an account?"}
          </p>
          <button className="login-check-btn ms-2" onClick={handleLoginCheck}>
            {isUser ? "Sign up" : "Login"}
          </button>
        </div>
        <Button
          variant="outline-primary"
          className="d-flex align-items-center"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle className="me-1" />{" "}
          {isUser ? "Google Login" : "Google Sign Up"}
        </Button>
      </div>
    </Container>
  );
};

export default Login;
