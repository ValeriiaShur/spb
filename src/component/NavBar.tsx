import React, { Component } from 'react';
import { Switch, Route, NavLink, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import Map from './Map';
import { Process } from './Process';
import { Poster } from './Poster';
import { Dataset } from './Dataset';
import { NoMatch } from './NoMatch';

import '../App.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg" variant="light">
          <Navbar.Brand as={Link} to="/spb">
            How-old-is-this
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavItem>
                <NavLink className="d-inline p-2 bf-dark text-dark" to="/spb">
                  Map
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="d-inline p-2 bf-dark text-dark" to="/spb/process">
                  Process
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="d-inline p-2 bf-dark text-dark" to="/spb/poster">
                  Printed Poster and Map
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="d-inline p-2 bf-dark text-dark" to="/spb/dataset">
                  Dataset
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/spb/dataset" component={Dataset} />
          <Route path="/spb/poster" component={Poster} />
          <Route path="/spb/process" component={Process} />
          <Route path="/spb" component={Map} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default NavBar;
