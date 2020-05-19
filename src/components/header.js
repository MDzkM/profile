import { Link } from "gatsby"
import React, { Component } from "react"
import styled from "styled-components"
import { Navbar, Nav, Button } from "react-bootstrap"

import { toggleDarkMode, toggleLightMode } from "../services/useDarkMode"

export const StyledHeader = styled.header`  
  .hamburger {
    padding: 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
  }

  .hamburger:hover {
    opacity: 0.7;
  }
  
  .hamburger.is-active:hover {
    opacity: 0.7;
  }

  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::before,
  .hamburger.is-active .hamburger-inner::after {
    background-color: black;
  }

  .hamburger-box {
    width: 27px;
    height: 24px;
    display: inline-block;
    position: relative; }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -1px;
  }

  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 27px;
    height: 4px;
    background-color: black;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::before {
    top: -10px;
  }

  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--squeeze .hamburger-inner {
    transition-duration: 0.075s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--squeeze .hamburger-inner::before {
    transition: top 0.075s 0.12s ease, opacity 0.075s ease;
  }

  .hamburger--squeeze .hamburger-inner::after {
    transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--squeeze.is-active .hamburger-inner {
    transform: rotate(45deg);
    transition-delay: 0.12s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--squeeze.is-active .hamburger-inner::before {
    top: 0;
    opacity: 0;
    transition: top 0.075s ease, opacity 0.075s 0.12s ease;
  }

  .hamburger--squeeze.is-active .hamburger-inner::after {
    bottom: 0;
    transform: rotate(-90deg);
    transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .theme-toggler {
    display: none;
  }

  .dropdown-links {
    margin-bottom: 1rem;
  }

  .nav-item a {
    opacity: 0.75;
  }

  .nav-item a:focus, .nav-item a:hover {
    opacity: 1;
  }

  .navbar-brand {
    padding-top: 0.22vh;
  }

  .navbar-brand:hover {
    color: #007bff
  }
  
  @media only screen and (min-width: 992px) {
    padding: 5% 20% 0;
    
    .theme-toggler-mobile {
      display: none;
    }
    
    .theme-toggler {
      display: block;
    }

    .dropdown-links {
      margin-bottom: 0;
    }
  }
`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  toggleHamburger = () => {
    this.setState({
      isActive: !this.state.isActive
    }) 
  }


  render() {
    const { isActive } = this.state
    return (
      <StyledHeader>
        <Navbar expand="lg">
          <Navbar.Brand><Link to="/" style={{textDecoration: `none`, fontWeight: `bold`}}>mdzkm.</Link></Navbar.Brand>
          <Nav.Item className="ml-auto theme-toggler-mobile mr-2"><Button variant="light" onClick={toggleLightMode}><span role="img" aria-label="Light Mode">☀</span></Button></Nav.Item>
          <Nav.Item className="theme-toggler-mobile"><Button variant="dark" onClick={toggleDarkMode}><span role="img" aria-label="Dark Mode">🌙</span></Button></Nav.Item>
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: 0}}>
            <button className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : ''}`} type="button" onClick={this.toggleHamburger}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item className="mr-4 dropdown-links"><Link to="/about" style={{textDecoration: `none`}}>About</Link></Nav.Item>
              <Nav.Item className="mr-4 dropdown-links"><Link to="/projects" style={{textDecoration: `none`}}>Projects</Link></Nav.Item>
              <Nav.Item className="mr-4 dropdown-links"><Link to="/blog" style={{textDecoration: `none`}}>Blog</Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav.Item className="ml-auto theme-toggler mr-2"><Button variant="light" onClick={toggleLightMode}><span role="img" aria-label="Light Mode">☀</span></Button></Nav.Item>
          <Nav.Item className="ml-auto theme-toggler"><Button variant="dark" onClick={toggleDarkMode}><span role="img" aria-label="Dark Mode">🌙</span></Button></Nav.Item>
        </Navbar>
      </StyledHeader>
    )
  }
}

export default Header
