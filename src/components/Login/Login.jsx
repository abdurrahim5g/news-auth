import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContex } from "../../Contex/AuthProvider";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState(false);
  const { userSignIn, setUser } = useAuthContex();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);

  // handleFormSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      userSignIn(email, password)
        .then((result) => {
          console.log(result.user);
          if (!result?.user?.emailVerified) {
            setError("Please varify your email & then try to login");
          } else {
            setUser(result?.user);
            setError();
            toast.success("Login sucessfully");
            navigate(from, {
              replace: true,
            });
          }
        })
        .catch((err) => setError(err.code));
    } else {
      setError("Please correct your information");
    }

    console.log(email, password);
  };

  return (
    <section className="login-component">
      <div className="bg-light p-5">
        <h3 className="mb-4">Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <div className="error-message mb-2">
            {error && <Form.Text className="text-danger">{error}</Form.Text>}
          </div>

          <Button variant="primary" type="submit">
            Login
          </Button>

          <p>
            New to <em>News portal</em>{" "}
            <Link to="/signup">Create new account</Link>
          </p>
        </Form>
      </div>
    </section>
  );
};

export default Login;
