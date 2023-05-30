import { Button, ButtonGroup, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaDribbble,
  FaFacebook,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./RightSidebar.css";
import partner1 from "../../assets/images/partner/partner-1.png";
import partner2 from "../../assets/images/partner/partner-2.png";
import partner3 from "../../assets/images/partner/partner-3.png";
import partner4 from "../../assets/images/partner/partner-4.png";
import partner5 from "../../assets/images/partner/partner-5.png";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthContex } from "../../Contex/AuthProvider";
import { toast } from "react-hot-toast";

const RightSidebar = () => {
  const { providerLogin, user } = useAuthContex();

  const googleProvider = new GoogleAuthProvider();
  const handleProviderLogin = (provider) => {
    providerLogin(provider)
      .then((result) => {
        toast.success("Sign up  sucessfully");
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.code);
        toast.error(err.message);
      });
  };

  return (
    <div className="right-sidebar-component ">
      {!user?.uid && (
        <div className="login-options  mb-5">
          <ButtonGroup vertical className="w-100">
            <Button
              variant="outline-primary"
              onClick={() => handleProviderLogin(googleProvider)}
            >
              <FaGoogle /> Login with Google
            </Button>
            <Button variant="outline-secondary" className="mt-2 ">
              <FaFacebook /> Login with Facebook
            </Button>
          </ButtonGroup>
        </div>
      )}

      <div className="find-us-on mb-5">
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
