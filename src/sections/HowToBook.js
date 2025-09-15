// HowToBook.jsx
import { Container } from "react-bootstrap";
import bookImg from "../doctor-doing-their-work-pediatrics-office.jpg"; // поставь сюда свою картинку
import './HowToBook.css';

function HowToBook() {
  const steps = [
    "Позвоните нам или оставьте заявку",
    "Диагностическая сессия 1 час /\ 2 900 ₽",
    "Проводим индивидуальную работу",
  ];

  return (
    <section id="how-to-book" className="py-5 how-to-book-section">
      <Container>
        <h2 className="mb-5 text-center">Инструкция по записи</h2>
        <div className="howto-split">
          {/* Левая часть — шаги */}
          <div className="howto-left">
            {steps.map((step, i) => (
              <div className="step-item-glass" key={i}>
                <div className="step-number-glass">{i + 1}</div>
                <div className="step-content-glass">{step}</div>
              </div>
            ))}
          </div>

          {/* Правая часть — картинка */}
          <div className="howto-right glass-pane">
            <div
              className="howto-image"
              style={{ backgroundImage: `url(${bookImg})` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HowToBook;
