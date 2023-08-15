import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FooterComp = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Relax Academy</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis inventore beatae praesentium laborum odio sequi vitae
              incidunt sed eos aliquam!
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+6234567890</p>
              </Link>
            </div>
            <div className="email">
              <Link className="text-decoration-none">
              <i className="fa-regular fa-envelope"></i>
                <p className="m-0">Relax@gmail.com</p>
              </Link>
            </div>
          </Col>

          <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="testimonial">Testimoni</Link>
          <Link to="faq">FAQ</Link>
          <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-4">Subscribe Untuk Info Menarik</h5>
          <div className="subscribe">
            <input type="text" placeholder="subscribe" />
            <button className="btn btn-dark rounded-end rounded-0">Subscribe</button>
          </div>

          <div className="sosial mt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          </Col>
        </Row>

        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Mohamad Dimas Prayoga</span></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
