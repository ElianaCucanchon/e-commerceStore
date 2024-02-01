//Todo componente se crea con mayuscula la primera, salvo main... para diferenciarlo d euna funcion de JS. en este caso es NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

export const NavBar = ({ mensaje }) => {
    return (
        <>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Juel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hombre
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Descuentos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link href="#carrito">
            <CartWidget/>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </>
    );
}




//El componente NavBar pide un mensaje en un componente p.. voy a App.jsx e importo el componente NavBar