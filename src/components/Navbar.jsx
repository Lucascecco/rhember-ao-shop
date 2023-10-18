import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <Navbar>
                <Container fluid>
                    <Navbar.Brand href="/">Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={'nav-link'} to={'/'}>Principal</NavLink>
                            <NavLink className={'nav-link'} to={'/category/mens-clothing'}>Ropa Hombre</NavLink>
                            <NavLink className={'nav-link'} to={'/category/womens-clothing'}>Ropa Mujer</NavLink>
                            <NavLink className={'nav-link'} to={'/category/jewelery'}>Joyería</NavLink>
                            <NavLink className={'nav-link'} to={'/category/electronics'}>Electrónica</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget/>
                </Container>
            </Navbar>
        </header>
    )
}