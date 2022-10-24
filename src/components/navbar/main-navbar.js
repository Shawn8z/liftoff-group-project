import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import MainPage from "../../pages/homepage/mainPage";
import RegistrationPage from "../../pages/registration/Registration.page";
import LogInPage from "../../LogIn/LogInPage";
import "./main-navbar-style.css";

export default function MainNavbar() {
  return (
    <> 
      
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
        className=""
      > 
        
        <Nav>
          <Navbar.Brand  className="home" as={Link} to="/">
            Grow
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          

          <Nav.Link
            className="signin position-absolute end-0"
            as={Link}
            to="/logIn"
          >
            Sign in
          </Nav.Link>

          <Nav.Link
            className="register position-absolute end-0"
            as={Link}
            to="/registration"
          >
            Register
          </Nav.Link>
        </Nav>
      </Navbar>

    </>
  );
}
