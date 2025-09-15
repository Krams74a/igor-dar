import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './FormSection.css';

function FormSection({ formType }) {
  if (formType === "first") {
    return (
      <section 
        id="form" 
        className="py-5 form-section"
      >
        <Container>
          <h2 className="mb-3 text-center">Узнали свои симптомы?</h2>
          <h2 className="mb-3 text-center">Запишитесь на консультацию</h2>
          <p className="text-center mb-4 text-muted">
            Точно диагностировать заболевание может только специалист, не откладывайте консультацию на потом, записывайтесь в форме ниже.
          </p>
          <Row>
            <Col xs={12} md={6} className="mx-auto">
              <div className="glass-form p-4">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Ваше имя" className="form-control-glass" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" placeholder="Телефон" className="form-control-glass" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={3} placeholder="Комментарий" className="form-control-glass" />
                  </Form.Group>
                  <div className="d-grid mt-3">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="text-white fw-bold submit-btn"
                    >
                      Отправить
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else {
    return (
      <section 
        id="form" 
        className="py-5 form-section"
      >
        <Container>
          <h2 className="mb-3 text-center">Запишитесь на консультацию</h2>
          <p className="text-center mb-4 text-muted">
            Точно диагностировать заболевание может только специалист, не откладывайте консультацию на потом, записывайтесь в форме ниже.
          </p>
          <Row>
            <Col xs={12} md={6} className="mx-auto">
              <div className="glass-form p-4">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Ваше имя" className="form-control-glass" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" placeholder="Телефон" className="form-control-glass" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={3} placeholder="Комментарий" className="form-control-glass" />
                  </Form.Group>
                  <div className="d-grid mt-3">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="text-white fw-bold submit-btn"
                    >
                      Отправить
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
  
}

export default FormSection;
