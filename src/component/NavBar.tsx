import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../App.css';

export default function NavBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}