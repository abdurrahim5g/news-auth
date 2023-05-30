import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import AllCatagory from "../components/AllCatagory/AllCatagory";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import { Toaster } from "react-hot-toast";

const Main = () => {
  return (
    <main className="main-layout">
      <Header></Header>
      <section className="outlet-container py-5 ">
        <Container>
          <Row>
            <Col lg="2" className="d-lg-block d-none">
              <AllCatagory></AllCatagory>
            </Col>
            <Col lg="7">
              <Outlet></Outlet>
            </Col>
            <Col lg="3" className="mt-lg-0 mt-4">
              <RightSidebar></RightSidebar>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
      <Toaster />
    </main>
  );
};

export default Main;
