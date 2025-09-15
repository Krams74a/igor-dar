import { Container } from "react-bootstrap";
import symptoms1 from "../symptoms1.jpg";
import symptoms2 from "../symptoms2.jpg";
import symptoms3 from "../symptoms3.jpg";
import "./Symptoms.css";
import "../sections/glass-block.css";
import "./SymptomsGlass.css";

function Symptoms() {
  const physical = [
    "Головокружение",
    "Шум в ушах",
    "Головная боль, мигрень",
    "Онемение, покалывание",
    "Скачки давления",
    "Проблемы со зрением, расфокусировка",
    "Ком в горле, трудность с глотанием",
    "Учащённое сердцебиение",
  ];

  const psychological = [
    "Внезапная паника",
    "Беспричинный страх",
    "Страх смерти / сойти с ума",
    "Страх задохнуться",
    "Ощущение нервного срыва",
    "Страх не справиться, потерять контроль",
  ];

  const behavioral = [
    "Избегание людных мест",
    "Боязнь выйти из дома (агорафобия)",
    "Снижение активности и мотивации",
    "Проблемы со сном и режимом",
    "Раздражительность, плаксивость",
  ];

  const blocks = [
    { title: "Физические", items: physical, img: symptoms1, icon: "💊" },
    { title: "Психологические", items: psychological, img: symptoms2, icon: "🧠" },
    { title: "Поведенческие", items: behavioral, img: symptoms3, icon: "⚡" },
  ];

  return (
    <section id="symptoms" className="py-5 symptoms-section">
      <Container>
        <h2 className="mb-1 text-center">Больше не нужно делить жизнь на до и после.</h2>
        <h2 className="mb-3 text-center text-primary">Вернем ваше обычное, здоровое состояние.</h2>
        <p className="mb-5 text-center">Убирая основную причину, мы устраняем <b>все сопутствующие симптомы</b></p>
        {blocks.map((block, index) => (
          <div className="symptom-block-glass mb-5" key={index}>
            <div className={`symptoms-split ${index % 2 === 1 ? "reverse" : ""}`}>
              {/* Левая часть */}
              <div className="symptoms-content-left">
                <div className="glass-pane title-pane mb-3">
                  <span className="icon">{block.icon}</span>
                  <h4>{block.title}</h4>
                </div>
                {block.items.map((item, i) => (
                  <div className="glass-pane symptom-pane" key={i}>
                    {item}
                  </div>
                ))}
              </div>

              {/* Правая часть */}
              <div className="symptoms-content-right glass-pane">
                <div
                  className="symptoms-image"
                  style={{ backgroundImage: `url(${block.img})` }}
                />
              </div>
            </div>
          </div>
        ))}

      </Container>
    </section>
  );
}

export default Symptoms;
