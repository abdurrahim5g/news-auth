import "./SignUp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContex } from "../../Contex/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
  const [accept, setAccept] = useState(false);
  const [error, setError] = useState(false);
  const { userSignUp, updateUserProfile, auth } = useAuthContex();
  const navigate = useNavigate();

  // handleFormSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (name && email && photoURL && password) {
      userSignUp(email, password)
        .then((result) => {
          console.log(result.user);
          updateUserProfile({ displayName: name, photoURL: photoURL });
          sendEmailVerification(auth.currentUser).then(() => {
            toast.success("Please varefy your email & then login");
            navigate("/login");
          });
        })
        .catch((err) => setError(err.code));
    } else {
      setError("Please correct your all information  and then sign up");
    }

    console.log(name, email, photoURL, password);
  };

  return (
    <section className="register-component">
      <div className="bg-light p-5">
        <h3 className="mb-4">Sign Up</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="userPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="url"
              placeholder="User Photo URl"
              required
              name="photoURL"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              name="password"
            />
          </Form.Group>

          <Form.Group className="" controlId="acceptTrams">
            <Form.Check
              type="checkbox"
              onChange={(event) => {
                setAccept(event.target.checked);
              }}
              label={
                <p className="m-0">
                  I accept your{" "}
                  <Link to="/trams-and-conditions">Trams & Conditions</Link>
                </p>
              }
            />
          </Form.Group>

          <div className="error-message mb-2">
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
          </div>

          <Button variant="primary" type="submit" disabled={!accept}>
            Sign Up
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
