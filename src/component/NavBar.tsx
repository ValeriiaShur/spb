import React, { Component } from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Map from './Map';
import { About } from './About';
import { NoMatch } from './NoMatch';

import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Navbar.Brand as={Link} to="/map">How-old-is-this</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavItem >
                                <NavLink className="d-inline p-2 bf-dark text-white" to="/spb" >Home</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="d-inline p-2 bf-dark text-white" to="/spb/about" >About</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route path='/spb' component={Map} />
                    <Route path='/spb/about' component={About} />
                    <Route path='*' component={NoMatch} />
                </Switch>
            </div>
        );
    }
}

export default NavBar;