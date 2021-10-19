import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import { useAuth } from "../Context/authContext";
import "./privateRoute.css";

function PrivateRoute({ children, ...rest }) {
  let { user, loading } = useAuth();

  if (loading) {
    return (
      <Spinner animation="border" className="gym-spinner" variant="danger" />
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
