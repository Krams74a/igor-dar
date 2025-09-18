import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useRef } from "react";
import './FormSection.css';

function FormSection({ formType }) {
  const formContainerRef = useRef(null);

  useEffect(() => {
    if (!formContainerRef.current) return;

    formContainerRef.current.innerHTML = '';

    const embedScript = document.createElement('script');
    embedScript.setAttribute('data-b24-form', 'inline/19/08hhju');
    embedScript.setAttribute('data-skip-moving', 'true');

    embedScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b34464586/crm/form/loader_19.js');";

    formContainerRef.current.appendChild(embedScript);

    return () => {
      if (formContainerRef.current) {
        formContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  if (formType === "first") {
    return (
      <section
        id="form"
        className="py-5 form-section"
      >
        <Container>
          <h2 className="form-title text-center mb-3 title">
            Узнали свои симптомы?<br />
            Запишитесь на консультацию
          </h2>
          <p className="form-subtitle text-center mb-4">
            Точно диагностировать заболевание может только специалист, не откладывайте консультацию на потом, записывайтесь в форме ниже.
          </p>
          <Row>
            <Col xs={12} md={6} className="mx-auto">
              <div className="p-4" ref={formContainerRef} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  } else {
    return (
      <section
        id="form-secondary"
        className="py-5 form-section"
      >
        <Container>
          <h2 className="form-title text-center mb-3 title">
            Запишитесь на консультацию
          </h2>
          <p className="form-subtitle text-center mb-4">
            Точно диагностировать заболевание может только специалист, не откладывайте консультацию на потом, записывайтесь в форме ниже.
          </p>
          <Row>
            <Col xs={12} md={6} className="mx-auto">
              <div className="p-4" ref={formContainerRef} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

}

export default FormSection;
