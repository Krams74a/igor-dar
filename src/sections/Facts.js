import { Container, Row, Col, Card } from "react-bootstrap";
import { FaLaptop, FaPills, FaUserFriends, FaSeedling } from "react-icons/fa";
import './Facts.css';

function Facts() {
  const facts = [
    { 
      title: "Онлайн-формат", 
      text: "Занятия проходят удалённо — вы работаете над собой в привычной и безопасной обстановке, где чувствуете себя максимально комфортно.", 
      icon: <FaLaptop size={28} className="text-primary" /> 
    },
    { 
      title: "Без медикаментов", 
      text: "Методика не требует таблеток — значит, никаких побочных эффектов и зависимости от препаратов.", 
      icon: <FaPills size={28} className="text-success" /> 
    },
    { 
      title: "Индивидуальный подход", 
      text: "Вы работаете лично с психологом, а не с записью или шаблонным курсом. Каждая сессия строится под вашу ситуацию.", 
      icon: <FaUserFriends size={28} className="text-warning" /> 
    },
    { 
      title: "Решение причины, а не симптомов", 
      text: "Мы работаем с корнем проблемы, чтобы тревожность не возвращалась, а не просто приглушаем её проявления.", 
      icon: <FaSeedling size={28} className="text-danger" /> 
    },
  ];

  return (
    <section id="facts">
      <Container>
        <h2 className="facts-heading text-center title">Почему выбирают нас</h2>
        <Row className="g-4">
          {facts.map((fact, i) => (
            <Col key={i} xs={12} md={6}>
              <Card className="fact-card h-100 p-3 border-0">
                <div className="fact-header">
                  {fact.icon}
                  <h5 className="fact-title">{fact.title}</h5>
                </div>
                <p className="fact-text">{fact.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Facts;
