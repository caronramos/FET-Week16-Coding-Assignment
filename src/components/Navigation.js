import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return(
    <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top" >
      <Navbar.Brand as={NavLink} to="/">Among Us Task List Info</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/add">Add a New Task</Nav.Link>
        <Nav.Link as={NavLink} to="/list">Task List</Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  )  
}

export default Navigation;