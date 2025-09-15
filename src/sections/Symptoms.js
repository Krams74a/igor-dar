import { Container, Row, Col } from "react-bootstrap";
import symptoms1 from "../assets/symptoms/symptoms1.jpg";
import symptoms2 from "../assets/symptoms/symptoms2.jpg";
import symptoms3 from "../assets/symptoms/symptoms3.jpg";
import "./Symptoms.css";

function Symptoms() {
  const blocks = [
    {
      title: "Физические",
      items: [
        "Головокружение",
        "Шум в ушах",
        "Головная боль, мигрень",
        "Онемение, покалывание",
        "Скачки давления",
        "Проблемы со зрением, расфокусировка",
        "Ком в горле, трудность с глотанием",
        "Учащённое сердцебиение",
      ],
      img: symptoms1,
    },
    {
      title: "Психологические",
      items: [
        "Внезапная паника",
        "Беспричинный страх",
        "Страх смерти / сойти с ума",
        "Страх задохнуться",
        "Ощущение нервного срыва",
        "Страх не справиться, потерять контроль",
      ],
      img: symptoms2,
    },
    {
      title: "Поведенческие",
      items: [
        "Избегание людных мест",
        "Боязнь выйти из дома (агорафобия)",
        "Снижение активности и мотивации",
        "Проблемы со сном и режимом",
        "Раздражительность, плаксивость",
      ],
      img: symptoms3,
    },
  ];

  return (
    <section id="symptoms" className="py-5 symptoms-section">
      <Container>
        <h2 className="symptoms-title text-center title">
          Больше не нужно делить жизнь на до и после.<br />
          Вернем ваше обычное, здоровое состояние.
        </h2>
        <p className="symptoms-subtitle text-center">
          Убирая основную причину, мы устраняем <b>все сопутствующие симптомы</b>
        </p>

        {blocks.map((block, index) => (
          <Row
            key={index}
            className={`mb-5 align-items-stretch ${index % 2 === 1 ? "flex-row-reverse" : ""}`}
          >
            <Col xs={12} md={6}>
              <div className="symptom-block glass-block h-100">
                <h4>{block.title}</h4>
                <ul>
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                className="symptom-image h-100"
                style={{ backgroundImage: `url(${block.img})` }}
              />
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}

export default Symptoms;
