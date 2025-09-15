import { Container, Row, Col, Carousel, Card, Ratio, Button } from "react-bootstrap";
import './Testimonials.css';

function Testimonials() {
  const textReviews = [
    { text: "Очень помогло, стало легче жить!", author: "Анна, 32" },
    { text: "Благодарен за поддержку и внимание.", author: "Иван, 40" },
    { text: "Отличный специалист, рекомендую!", author: "Мария, 28" },
  ];

  const videoLinks = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/ysz5S6PUM-U",
  ];

  return (
    <section id="testimonials" className="py-5 testimonials-section">
      <Container>
        <h2 className="mb-5 text-center">Отзывы клиентов</h2>
        <Row className="mb-5 g-4">
          <Col md={6}>
            <h4 className="mb-3">Текстовые отзывы</h4>
            <Carousel variant="dark" interval={5000} className="mb-4">
              {textReviews.map((item, i) => (
                <Carousel.Item key={i}>
                  <Card className="glass-testimonial mx-auto p-4">
                    <Card.Body className="text-center">
                      <p className="mb-3">“{item.text}”</p>
                      <small className="text-muted">— {item.author}</small>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          <Col md={6}>
            <h4 className="mb-3">Видеоотзывы</h4>
            <Carousel>
              {videoLinks.map((link, i) => (
                <Carousel.Item key={i}>
                  <Card className="glass-testimonial p-3">
                    <Ratio aspectRatio="16x9">
                      <iframe src={link} title={`Видеоотзыв ${i + 1}`} allowFullScreen />
                    </Ratio>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col className="text-center">
            <p className="mb-3">Больше отзывов вы можете найти на:</p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button className="btn-glass" href="https://prodoctorov.ru/" target="_blank">
                ProDoctorov
              </Button>
              <Button className="btn-glass" href="https://yandex.ru/maps/" target="_blank">
                Яндекс.Карты
              </Button>
              <Button className="btn-glass" href="https://google.com/maps/" target="_blank">
                Google Maps
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
