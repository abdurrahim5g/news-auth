import "./SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="register-component">
      <div className="bg-light p-5">
        <h3 className="mb-4">Sign Up</h3>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="url" placeholder="User Photo URl" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group className="" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label={
                <p className="m-0">
                  I accept your{" "}
                  <Link to="/trams-and-conditions">Trams & Conditions</Link>
                </p>
              }
            />
          </Form.Group>

          <div className="error-message mb-2">
            <Form.Text className="text-danger">error</Form.Text>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <p className="mb-0 mt-2">
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default SignUp;
