import { Badge, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Link } from "react-router-dom";
import AllCatagory from "../AllCatagory/AllCatagory";
import { useAuthContex } from "../../Contex/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useAuthContex();

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logout sucessfully"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="header-component ">
      <Navbar bg="light" expand="lg" className="py-2">
        <Container>
          <Link
            to={"/"}
            style={{
              fontSize: "40px",
              justifyContent: "center",
              verticalAlign: "middle",
            }}
            className="logo-link"
          >
            <Badge bg="primary">News</Badge> <span>Portal</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-end">
            <div className="d-block d-lg-none py-3">
              <AllCatagory></AllCatagory>
            </div>

            {!user?.uid ? (
              <div className="login">
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary ms-2">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="user-info">
                <div className="base-info d-flex align-items-center ">
                  <h5 className="m-0">
                    {user?.displayName}
                    <br />
                    <Button className="py-1 mt-1" onClick={handleLogOut}>
                      Log Out
                    </Button>
                  </h5>
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    className="rounded ms-3"
                    style={{ width: "60px" }}
                  />
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
