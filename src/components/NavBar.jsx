import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = ({loggedIn}) => {


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container style={{width: "90vw"}}>
                    <Navbar.Brand style={{ cursor: "default", color: "rgb(102, 7, 47)" }}>Open 7 Days</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/menu">Menu</Nav.Link>
                            <Nav.Link href="/contact">Contact Us</Nav.Link>
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                {loggedIn ?
                                    <NavDropdown.Item href="/account">Overview</NavDropdown.Item>
                                    :
                                    <NavDropdown.Item href="/login">Login/Signup</NavDropdown.Item>
                                }

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
}

export default NavBar;