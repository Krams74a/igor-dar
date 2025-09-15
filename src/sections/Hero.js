import { Container, Row, Col } from "react-bootstrap";
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <div className="hero-glass-block">
              <h1 className="display-5 fw-bold white-text">
                Избавим вас от панических атак, неврозов и тревожных расстройств <span className="text-accent">за 5 недель</span>
              </h1>
              <p className="lead black-text">
                Уникальная методика клинического психолога и эксперта федеральных телеканалов — Игоря Дара
              </p>

              <div className="button-container">
                <button className="hero-button">
                  <span>Записаться на консультацию</span>
                </button>
              </div>

              <p className="lead mt-3 black-text gift-text">
                🎁 + в подарок чек лист «Что делать при панической атаке»
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
