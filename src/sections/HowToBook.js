import { Container } from "react-bootstrap";
import bookImg from "../assets/images/4E4A5351.jpg";
import './HowToBook.css';

function HowToBook() {
  const steps = [
    {
      title: "Оставьте заявку на консультацию",
      description: "Заполните форму ниже или позвоните по телефону +7 (932) 698-83-52"
    },
    {
      title: "Диагностическая сессия",
      description: "1 час индивидуальной работы / 2 900 ₽. Определяем причины и составляем план лечения"
    },
    {
      title: "Начинаем авторскую программу",
      description: "5 недель индивидуальной работы по уникальной методике без медикаментов"
    },
    {
      title: "Получаете результат",
      description: "Возвращаетесь к нормальной жизни, избавляетесь от панических атак навсегда"
    }
  ];

  return (
    <section id="how-to-book" className="py-5 how-to-book-section">
      <Container>
        <h2 className="mb-5 text-center title how-to-title">
          Для того, чтобы записаться на авторскую программу, воспользуйтесь этой простой инструкцией
        </h2>
        <div className="howto-split">
          <div className="howto-left">
            {steps.map((step, i) => (
              <div className="step-item-glass" key={i}>
                <div className="step-number-glass">{i + 1}</div>
                <div className="step-content-glass">
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

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
