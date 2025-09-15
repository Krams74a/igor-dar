import { Container, Row, Col, Button } from "react-bootstrap";
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <div className="glass-block">
              <h1 className="display-5 fw-bold">
                Избавим вас от панических атак, неврозов и тревожных расстройств <span className="text-accent">за 5 недель</span>
              </h1>
              <p className="lead">
                Уникальная методика клинического психолога и эксперта федеральных телеканалов — Игоря Дара
              </p>
              <Button size="lg" className="hero-button" variant="primary">Записаться на консультацию</Button>
              <p className="mt-3"><i>+ в подарок чек лист «Что делать при панической атаке»</i></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
