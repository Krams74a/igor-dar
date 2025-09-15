import { Container, Row, Col, Card } from "react-bootstrap";
import './Benefits.css';

function Benefits() {
  const benefits = [
    { title: "Более 12 лет практики", text: "Более 12 лет помогаю людям справиться с паническими атаками, неврозами, расстройствами.", icon: "🎓" },
    { title: "Поддержка", text: "Индивидуальный подход к каждому клиенту, регулярные консультации и поддержка.", icon: "🤝" },
    { title: "2 327+ довольных клиентов", text: "Собственная авторская методика, помог более чем 2 327 клиентам.", icon: "🏆" },
  ];

  return (
    <section id="benefits" className="py-5 benefits-section">
      <Container>
        <h2 className="mb-5 text-center">Преимущества</h2>
        <Row className="g-4 align-items-stretch">
          {benefits.map((b, i) => (
            <Col md={4} key={i}>
              <Card className="h-100 glass-block text-center">
                <div>{b.icon}</div>
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
