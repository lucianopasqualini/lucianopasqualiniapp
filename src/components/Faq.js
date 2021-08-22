import React from 'react';
import './components.css';
import { NavLink } from 'react-router-dom'
import { Nav , Navbar, NavDropdown, Container, Button } from 'react-bootstrap';

function Faq() {
    return <>
            <header id="header">
                <Navbar>
                    <Container>
                        <Navbar.Brand className="my-2 col-1 offset-1" href="#home">
                            <NavLink to="/" activeClassName="activeRoute">
                                <img
                                src="https://bluu.be/wp-content/themes/bluu-theme/src/img/logo-bluu-blue.png"
                                width="100"
                                className="d-inline-block align-top"
                                alt=""
                            /></NavLink>
                        </Navbar.Brand>
                        <Nav>
                            <NavDropdown title="Géneros" id="nav-dropdown" activeClassName="nav-item">
                                <NavDropdown.Item eventKey="4.1" >
                                    <NavLink className="text-decoration-none nav-item" activeClassName="activeRoute" to="/Masculino">Masculino</NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">
                                    <NavLink className="text-decoration-none nav-item" activeClassName="activeRoute" to="/Femenino">Femenino</NavLink>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="FAQ">
                                <NavLink className="text-decoration-none nav-item" activeClassName="activeRoute" to="/faq">FAQ</NavLink>
                            </Nav.Link>
                        </Nav>
                        <Button className="cartWidget" variant="link">
                            <img 
                                src="https://image.flaticon.com/icons/png/512/126/126083.png" 
                                alt="carrito" 
                                className="col-1 offset-1 justify-content-center"
                            />
                        </Button>
                    </Container>
                </Navbar>
            </header>
        </>;
}

export default Faq;