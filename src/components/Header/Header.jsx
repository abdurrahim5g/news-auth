import { Badge } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import AllCatagory from "../AllCatagory/AllCatagory";
import { useAuthContex } from "../../Contex/AuthProvider";

const Header = () => {
  const { user } = useAuthContex();
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
            <div className="user-info">
              <h2>Welcome: {user?.displayName}</h2>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
