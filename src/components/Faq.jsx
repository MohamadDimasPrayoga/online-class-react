import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index";

export const Faq = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Pertanyaan yang sering muncul</h2>
          </Col>
        </Row>

        <Row className="row-cols-lg-1 row-cols-sm-1 row-cols-1 pt-5 g-2">
          {faq.map((data)=> {
            return(
              <Col key={data.id}>
          <Accordion>
            <Accordion.Item eventKey={data.eventKey}>
              <Accordion.Header>{data.title}</Accordion.Header>
              <Accordion.Body>
               {data.desc}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </Col>
            );
          })}
          
        </Row>
      </Container>
    </div>
  );
};

export default Faq;
