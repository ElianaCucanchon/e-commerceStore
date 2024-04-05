import { Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <p className="footer-text">&copy; 2021 - My Company. Todos los derechos reservados.</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Nav className="footer-nav">
              <Nav.Link as={Link} to="/" eventKey="link-1">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/about" eventKey="link-2">
                Sobre Nosotros
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" eventKey="link-3">
                Contacto
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

