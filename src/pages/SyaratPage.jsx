import { Container, Row, Col } from "react-bootstrap";
import Faq from "../components/Faq";

export const SyaratPage = () => {
  return (
    <div className="syarat-ken-page">
      <div className="syarat-ken min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">Syarat & Ketentuan</h1>
            <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugit quas tempore totam placeat provident!</p>
            </Col>
          </Row>

          <Row className="pt-5">
            <Col>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis adipisci odio blanditiis non veniam! Facere voluptates quae voluptatem amet, accusantium ab aperiam? Aliquam corporis fuga recusandae error nemo autem earum, magni nisi! Dolorum quo soluta ipsam, nostrum debitis, ab ex laudantium aliquid et consequatur, aspernatur doloribus. Itaque, rem corrupti.</p>
            </Col>
          </Row>

          <Row className="py-3">
            <Col>
            <h4 className="fw-bold">1. Lorem</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae repudiandae accusamus impedit assumenda eos expedita, nostrum fugiat in reprehenderit magnam, odit cumque blanditiis amet. Quibusdam ipsam id amet obcaecati corrupti recusandae dolore est asperiores ex, aut, veniam et suscipit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod quos quam possimus cupiditate quidem culpa reiciendis earum similique consectetur sint, aliquid cum nesciunt! Architecto dicta possimus nihil eaque blanditiis asperiores facilis non voluptatem officiis saepe, eum maxime eius nostrum voluptatum ipsa excepturi illum cum perspiciatis omnis. Harum, debitis magnam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt explicabo totam eos officia nam saepe quis atque perferendis, voluptatum quod numquam iste asperiores consequuntur quos quibusdam qui placeat! Explicabo ipsa dicta repellendus vero dolor. Laborum repellat consequuntur, esse beatae, officiis, ducimus consequatur earum maxime porro quae quis? Aliquid sunt eligendi explicabo repellendus asperiores alias dolor omnis veniam rerum ratione quia sed praesentium accusamus animi dolorem, dolores modi aperiam nihil, numquam cupiditate corporis nulla ipsam aliquam! Quae magnam minus laudantium aliquam!</p>
            </Col>
          </Row>

        </Container>
      </div>  
      <Faq />
    </div>
  )
}


export default SyaratPage;