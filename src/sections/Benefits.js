import { Container, Row, Col, Card } from "react-bootstrap";
import './Benefits.css';

import practiceIcon from '../assets/icons/book_and_pencil.png';
import supportIcon from '../assets/icons/friends.png';
import clientsIcon from '../assets/icons/user_groups.png';

function Benefits() {
  const benefits = [
    {
      title: "Более 12 лет практики",
      text: "Более 12 лет помогаю людям справиться с паническими атаками, неврозами, расстройствами.",
      icon: practiceIcon
    },
    {
      title: "Поддержка",
      text: "Индивидуальный подход к каждому клиенту, регулярные консультации и поддержка.",
      icon: supportIcon
    },
    {
      title: "2 327+ довольных клиентов",
      text: "Собственная авторская методика, помог более чем 2 327 клиентам.",
      icon: clientsIcon
    },
  ];

  return (
    <section id="benefits" className="py-5 benefits-section">
      <Container>
        <h2 className="mb-5 text-center title">Преимущества</h2>
        <Row className="g-4 align-items-stretch">
          {benefits.map((b, i) => (
            <Col md={4} key={i}>
              <Card className="h-100 glass-block text-center">
                <div className="icon-wrapper">
                  <img src={b.icon} alt={b.title} className="benefit-icon" />
                </div>
                <Card.Title>{b.title}</Card.Title>
                <Card.Text>{b.text}</Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Benefits;
