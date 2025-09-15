import { Container, Row, Col } from "react-bootstrap";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section py-4">
      <Container>
        <Row>
          <Col md={4} className="text-start mb-3 mb-md-0">
            <div>ИП Дар И.В.</div>
            <div>© 2025 Все права защищены</div>
          </Col>

          <Col md={4} className="text-start mb-3 mb-md-0">
            <div>ОГРНИП 319645100079328</div>
            <div>ИНН 645328604501</div>
          </Col>

          <Col md={4} className="text-start">
            <div>Лицензия</div>
            <div>Политика конфиденциальности</div>
            <div>Карта сайта</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
