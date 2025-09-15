import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../logo.png";
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold">
          <img src={logo} alt="Логотип" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="#about">О нас</Nav.Link>
            <Nav.Link href="#testimonials">Отзывы</Nav.Link>
            <Nav.Link href="#about">О программе</Nav.Link>
            <Nav.Link href="#footer">Контакты</Nav.Link>
            <Nav.Link href="#blog">Блог</Nav.Link>
            <Nav.Link href="#services">Услуги</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <a href="tel:+74954310076" className="text-decoration-none text-dark">
              +7 (495) 431-00-76
            </a>
            <Button href="#form" variant="outline-primary">Записаться на консультацию</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
