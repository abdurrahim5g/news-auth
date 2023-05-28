/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaPinterest, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-component bg-light">
      <Container className="py-5 text-center">
        <Col lg="6" className="mx-auto">
          <h3 className="h1">Let's connect with us</h3>
          <p className="mt-3 ">
            Explore the world with daily update from{" "}
            <em>
              <strong>News Portal</strong>
            </em>
          </p>
          <div className="subscribe-form my-5">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="example@gmail.com"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary text-white ">Subscribe </Button>
            </Form>
          </div>

          <div className="social-links">
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
            <Link to="/">
              <FaPinterest />
            </Link>
            <Link to="/">
              <FaGithub />
            </Link>
          </div>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
