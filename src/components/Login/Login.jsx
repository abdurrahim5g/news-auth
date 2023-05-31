import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="login-component">
      <div className="bg-light p-5">
        <h3 className="mb-4">Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p>
            New to <em>News portal</em>{" "}
            <Link to="/signup">Create new account</Link>
          </p>

          <div className="error-message mt-2">
            <Form.Text className="text-danger">error</Form.Text>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
