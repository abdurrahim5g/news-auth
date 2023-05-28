import { Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import AllCatagory from "../AllCatagory/AllCatagory";

const Header = () => {
  return (
    <div className="header-component">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Link to={"/"}>
              <Badge bg="primary">News</Badge> Portal
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-end">
            <div className="d-block d-lg-none py-3">
              <AllCatagory></AllCatagory>
            </div>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
