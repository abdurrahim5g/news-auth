import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import AllCatagory from "../components/AllCatagory/AllCatagory";

const Main = () => {
  return (
    <main className="main-layout">
      <Header></Header>
      <section className="outlet-container py-5 ">
        <Container>
          <Row>
            <Col lg="2">
              <AllCatagory></AllCatagory>
            </Col>
            <Col lg="7">
              <Outlet></Outlet>
            </Col>
            <Col lg="3"></Col>
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </main>
  );
};

export default Main;
