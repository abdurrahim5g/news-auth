import { Button, ButtonGroup, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./RightSidebar.css";
import partner1 from "../../assets/images/partner/partner-1.png";
import partner2 from "../../assets/images/partner/partner-2.png";
import partner3 from "../../assets/images/partner/partner-3.png";
import partner4 from "../../assets/images/partner/partner-4.png";
import partner5 from "../../assets/images/partner/partner-5.png";

const RightSidebar = () => {
  return (
    <div className="right-sidebar-component">
      <div className="login-options">
        <ButtonGroup vertical className="w-100">
          <Button variant="outline-primary">Login with Google</Button>
          <Button variant="outline-secondary" className="mt-2">
            Login with Facebook
          </Button>
        </ButtonGroup>
      </div>

      <div className="find-us-on my-5">
        <h4 className="mb-3">Find us on</h4>
        <div className="social-links">
          <ul>
            <li>
              <Link to="#">
                <FaFacebookF /> Facebook
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaTwitter /> Twitter
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaLinkedinIn /> Linkedin
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaDribbble /> Dribbble
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaGithub /> Github
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="partner-content">
        <h4 className="mb-3">Our Partners</h4>
        <div className="partner-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={partner1}
                alt="Partner images"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={partner2}
                alt="Partner images"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={partner3}
                alt="Partner images"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={partner4}
                alt="Partner images"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={partner5}
                alt="Partner images"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
