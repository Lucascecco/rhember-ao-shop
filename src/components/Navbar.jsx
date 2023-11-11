import { Container, NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import CartWidget from './Cart/CartWidget';
import { NavLink } from 'react-router-dom';
import CartWidget from './Cart/CartWidget';

export default function NavBar() {
    return (
        <header>
            <Navbar expand="md">
                <Container fluid>
                    <Navbar.Brand href="/">Techno Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Componentes">
                                <NavLink className={'nav-link'} to={'/category/cpu'}>CPUs</NavLink>
                                <NavLink className={'nav-link'} to={'/category/gpu'}>GPUs</NavLink>
                                <NavLink className={'nav-link'} to={'/category/ram'}>RAMs</NavLink>
                                <NavLink className={'nav-link'} to={'/category/ssd'}>Discos Sólidos</NavLink>
                            </NavDropdown>
                            <NavLink className={'nav-link'} to={'/category/monitor'}>Monitores</NavLink>
                            <NavLink className={'nav-link'} to={'/category/keyboard'}>Teclados</NavLink>
                            <NavLink className={'nav-link'} to={'/category/mouse'}>Mouse</NavLink>
                            <NavLink className={'nav-link'} to={'/category/console'}>Consolas</NavLink>
                            <NavLink className={'nav-link'} to={'/category/gamepad'}>Mandos</NavLink>
                        </Nav>
                        <Nav>
                            <NavLink className={'nav-link'} to={'/cart'}><CartWidget /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    {/* <CartWidget/> */}
                </Container>
            </Navbar>
        </header>
    )
}