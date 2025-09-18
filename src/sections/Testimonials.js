import { Container, Row, Col, Card, Button, Ratio, Modal } from "react-bootstrap";
import { useState } from "react";
import reviews from "../data/reviews.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

function Testimonials() {
  const [showModal, setShowModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const importAll = (r) => r.keys().sort().map(r);
  const screenshotReviews = importAll(require.context('../assets/text_reviews', false, /\.jpg$/));

  const videoLinks = [
    "https://www.youtube.com/embed/fU5FqdO5Z7c",
    "https://www.youtube.com/embed/HGsdwO7e8So",
    "https://www.youtube.com/embed/tFhs-RPQ3-g",
    "https://www.youtube.com/embed/OeFplw-Jjak"
  ];

  const yellUrl = "https://www.yell.ru/moscow/com/igor-dar_11875184/reviews/";

  const renderStars = (count) => {
    return "★★★★★".slice(0, Math.max(0, Math.min(5, count)));
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const handleShowModal = (review) => {
    setSelectedReview(review);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedReview(null);
  };

  // Swiper configuration
  const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay],
    spaceBetween: 16,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-custom',
      prevEl: '.swiper-button-prev-custom',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
    speed: 600,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
  };

  return (
    <section id="testimonials" className="py-5 testimonials-section">
      <Container>
        <h2 className="mb-4 text-center title">Отзывы клиентов</h2>

        <div className="yell-badge-wrap mb-4 text-center">
          <a className="yell-badge" href={yellUrl} target="_blank" rel="noreferrer">
            <span className="yell-logo" aria-hidden>Yell</span>
            <span className="yell-text">Проверенные отзывы на Yell</span>
          </a>
        </div>

        {/* Yell reviews slider */}
        <div className="yell-slider mb-5">
          <div className="slider-header d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-0">Отзывы с Yell</h3>
            <div className="slider-controls">
              <button type="button" className="swiper-button-prev-custom slider-btn" aria-label="Предыдущий">
                <span className="arrow-left"></span>
              </button>
              <button type="button" className="swiper-button-next-custom slider-btn" aria-label="Следующий">
                <span className="arrow-right"></span>
              </button>
            </div>
          </div>
          <Swiper {...swiperConfig} className="yell-swiper">
            {reviews.map((item, i) => (
              <SwiperSlide key={i}>
                <Card className="testimonial-card h-100">
                  <Card.Body>
                    <div className="testimonial-rating" aria-label={`${item.rating} из 5`}>
                      <span className="stars">{renderStars(item.rating)}</span>
                      <span className="date">{item.date}</span>
                    </div>
                    <p className="testimonial-text">"{truncateText(item.text)}"</p>
                    {item.text.length > 120 && (
                      <Button 
                        variant="link" 
                        className="p-0 text-primary read-more-btn"
                        onClick={() => handleShowModal(item)}
                      >
                        Читать полностью
                      </Button>
                    )}
                    <div className="testimonial-author">— {item.author}</div>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-0">
                    <a href={yellUrl} target="_blank" rel="noreferrer" className="yell-link">
                      Читать отзыв на Yell →
                    </a>
                  </Card.Footer>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

        <Row className="mt-5 mb-5">
          <Col md={6}>
            <h4 className="mb-3 text-start">Текстовые отзывы</h4>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.screenshots-next',
                prevEl: '.screenshots-prev',
              }}
              pagination={{
                el: '.screenshots-pagination',
                clickable: true,
              }}
              className="screenshots-swiper"
            >
              {screenshotReviews.map((src, i) => (
                <SwiperSlide key={i}>
                  <a href={src} target="_blank" rel="noreferrer" className="screen-link">
                    <Card className="screen-card mx-auto">
                      <div className="screen-image-wrap">
                        <img src={src} alt={`Скриншот отзыва ${i + 1}`} className="screen-image" />
                      </div>
                    </Card>
                  </a>
                </SwiperSlide>
              ))}
              <div className="screenshots-pagination"></div>
            </Swiper>
            <div className="screenshots-controls d-flex justify-content-center gap-2 mt-3">
              <button type="button" className="screenshots-prev slider-btn" aria-label="Предыдущий">
                <span className="arrow-left"></span>
              </button>
              <button type="button" className="screenshots-next slider-btn" aria-label="Следующий">
                <span className="arrow-right"></span>
              </button>
            </div>
          </Col>

          <Col md={6}>
            <h4 className="mb-3 text-center">Видеоотзывы</h4>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.videos-next',
                prevEl: '.videos-prev',
              }}
              pagination={{
                el: '.videos-pagination',
                clickable: true,
              }}
              className="videos-swiper"
            >
              {videoLinks.map((link, i) => (
                <SwiperSlide key={i}>
                  <Card className="video-card">
                    <Ratio aspectRatio="16x9">
                      <iframe src={link} title={`Видеоотзыв ${i + 1}`} allowFullScreen />
                    </Ratio>
                  </Card>
                </SwiperSlide>
              ))}
              <div className="videos-pagination"></div>
            </Swiper>
            <div className="videos-controls d-flex justify-content-center gap-2 mt-3">
              <button type="button" className="videos-prev slider-btn" aria-label="Предыдущий">
                <span className="arrow-left"></span>
              </button>
              <button type="button" className="videos-next slider-btn" aria-label="Следующий">
                <span className="arrow-right"></span>
              </button>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <Button className="btn-glass" href={yellUrl} target="_blank" rel="noreferrer">
              Смотреть все отзывы на Yell
            </Button>
          </Col>
        </Row>
      </Container>

      {/* Модальное окно для полного отзыва */}
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Отзыв клиента</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReview && (
            <div>
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className="testimonial-rating">
                  <span className="stars">{renderStars(selectedReview.rating)}</span>
                  <span className="date">{selectedReview.date}</span>
                </div>
              </div>
              <p className="testimonial-text-full">"{selectedReview.text}"</p>
              <div className="testimonial-author">— {selectedReview.author}</div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Закрыть
          </Button>
          <Button variant="primary" href={yellUrl} target="_blank" rel="noreferrer">
            Читать на Yell
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Testimonials;
