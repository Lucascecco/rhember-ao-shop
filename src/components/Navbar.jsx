import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    // No existe un 
    return (
        <header>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="#principal">RhemberAO Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#principal">Principal</Nav.Link>
                            <Nav.Link href="#creditos">Créditos</Nav.Link>
                            <NavDropdown title="Objetos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#objetos/combate">Combate</NavDropdown.Item>
                                <NavDropdown.Item href="#objetos/exploracion">Exploración</NavDropdown.Item>
                                <NavDropdown.Item href="#objetos/utilidad">Utilidad</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}