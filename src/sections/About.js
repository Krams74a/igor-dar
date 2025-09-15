import { Container, Row, Col, Modal, Image } from "react-bootstrap";
import { useState } from "react";
import igorImage from "../assets/images/igor_dar.jpg";

import s1 from "../sertificates/s1.jpg";
import s2 from "../sertificates/s2.jpg";
import s3 from "../sertificates/s3.jpg";
import s4 from "../sertificates/s4.jpg";

import './About.css';

function About() {
  const [show, setShow] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const certificates = [s1, s2, s3, s4];

  const handleOpen = (img) => {
    setCurrentImg(img);
    setShow(true);
  };

  return (
    <section id="about">
      <Container>
        <Row className="g-4 align-items-stretch">
          <Col xs={12} md={5} className="d-flex igor-container">
            <div className="glass-block igor-block flex-fill">
              <img src={igorImage} alt="Игорь Дар" className="w-100 h-100 object-fit-cover" />
            </div>
          </Col>
          <Col xs={12} md={7} className="d-flex flex-column blocks-container">
            <div className="glass-block mb-4 flex-fill">
              <h2>Автор программы — клинический психолог, постоянный спикер федеральных телеканалов.</h2>
              <p>Я знаю, как тяжело жить в состоянии страха и тревоги. Эти мучительные ощущения можно и нужно прекратить.</p>
              <p>Моя методика помогает избавиться от панических атак и тревожных расстройств всего за 5 недель и вернуть привычное состояние спокойствия и контроля над своей жизнью</p>
              <p>Я лично буду сопровождать вас на каждом шаге, пока мы не достигнем результата.</p>
            </div>

            <div className="glass-block mt-auto">
              <p>Мои квалификации подтверждены сертификатами и дипломами:</p>
              <div className="d-flex flex-wrap gap-3">
                {certificates.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Сертификат ${i + 1}`}
                    className="img-thumbnail"
                    style={{ width: "120px", cursor: "pointer" }}
                    onClick={() => handleOpen(src)}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={() => setShow(false)} centered dialogClassName="modal-auto">
        <Modal.Body className="p-0 d-flex justify-content-center">
          <Image src={currentImg} fluid />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default About;
