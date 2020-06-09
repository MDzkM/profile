import { Link } from "gatsby"
import React, { Component } from "react"
import "./header.css"
import { Navbar, Nav, Button } from "react-bootstrap"

import { isBrowser, toggleDarkMode, toggleLightMode } from "../services/useLightMode"


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

  setLightMode = () => {
    toggleLightMode()
    if (isBrowser()) { window.location.reload() }
  }

  setDarkMode = () => {
    toggleDarkMode()
    if (isBrowser()) { window.location.reload() }
  }

  render() {
    const { isActive } = this.state
    return (
      <Navbar expand="lg" sticky="top">
        <div className="brand">
          <Navbar.Brand><Link to="/" style={{textDecoration: `none`, fontWeight: `bold`}}>mdzkm.</Link></Navbar.Brand>
        </div>
        <Nav.Item className="ml-auto theme-toggler-mobile mr-2"><Button variant="light" onClick={this.setLightMode}><span role="img" aria-label="Light Mode">☀</span></Button></Nav.Item>
        <Nav.Item className="theme-toggler-mobile"><Button variant="dark" onClick={this.setDarkMode}><span role="img" aria-label="Dark Mode">🌙</span></Button></Nav.Item>
        <div className="mobile-collpase">
          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border: 0}}>
            <div role="button" tabIndex={0} className={`hamburger hamburger--squeeze ${isActive ? 'is-active' : ''}`} onClick={this.toggleHamburger} onKeyDown={this.toggleHamburger}>
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto desktop-nav">
            <Nav.Item className="mr-4 dropdown-links"><Link to="/about" style={{textDecoration: `none`}}>About</Link></Nav.Item>
            <Nav.Item className="mr-4 dropdown-links"><Link to="/projects" style={{textDecoration: `none`}}>Projects</Link></Nav.Item>
            <Nav.Item className="mr-4 dropdown-links"><Link to="/blog" style={{textDecoration: `none`}}>Blog</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <Nav.Item className="ml-auto theme-toggler mr-2"><Button variant="light" onClick={this.setLightMode}><span role="img" aria-label="Light Mode">☀</span></Button></Nav.Item>
        <Nav.Item className="ml-auto theme-toggler"><Button variant="dark" onClick={this.setDarkMode}><span role="img" aria-label="Dark Mode">🌙</span></Button></Nav.Item>
      </Navbar>
    )
  }
}

export default Header
