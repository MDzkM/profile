/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"

import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.css'

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

import { getDarkMode } from "../services/useDarkMode"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false,
      children: null
    }
  }

  componentDidMount() {
    this.setState({
      darkMode: getDarkMode(),
      children: this.props.children
    })
  }

  render() {
    const { darkMode, children } = this.state
    const mode = darkMode ? darkTheme : lightTheme
    return (
      <ThemeProvider theme={mode}>
        <>
          <GlobalStyles />
          <Header />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              minHeight: `100%!important`,
            }}
          >
            <main>{children}</main>
            {/* <footer>
              Copyright © {new Date().getFullYear()} MDzkM. Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>.
            </footer> */}
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
