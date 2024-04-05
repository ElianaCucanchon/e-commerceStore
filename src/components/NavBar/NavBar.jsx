//Todo componente se crea con mayuscula la primera, salvo main... para diferenciarlo d euna funcion de JS. en este caso es NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartWidget } from '../CartWidget/CartWidget';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Categories } from '../Categories';
import { Link } from "react-router-dom"
import './NavBar.css'

export const NavBar = ({ mensaje }) => {
  return (
    <>
      <Navbar bg="Light" expand="lg" className="navbar-biscuit"  fixed="top" >
        <Container>
          <Navbar.Brand>Juel <Link to={'/'} className="nav-link"></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">
                    <FontAwesomeIcon icon={faHome} />
                    <br></br>
                  </Link>
                </li>
              </ul>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <Categories />

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <div>
            <CartWidget />
            <Nav.Link href="#carrito">
            </Nav.Link>
          </div>

        </Container>


      </Navbar>

    </>
  );
}




//El componente NavBar pide un mensaje en un componente p.. voy a App.jsx e importo el componente NavBar