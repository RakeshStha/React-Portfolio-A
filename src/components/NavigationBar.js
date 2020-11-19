import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
    background-color: grey;
}
.navbar-brand, .navbar-nav, .nav-link{
    color: #bbb;

    &:hover{
        color:white;
    }
}
`

export const NavigationBar = () => (
    <Styles>
        <Navbar  expand="lg">
  <Navbar.Brand href="/">PORTFOLIO</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Item><Nav.Link href="/home">Home</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
      <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
</Styles>
   

)