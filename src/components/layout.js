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

import { Icon } from "@iconify/react"
import socialGithubCircular from "@iconify/icons-typcn/social-github-circular"
import gitlabCircle from "@iconify/icons-jam/gitlab-circle"
import youtubeCircle from "@iconify/icons-jam/youtube-circle"
import linkedinCircle from "@iconify/icons-jam/linkedin-circle"

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
              display: `flex`,
              flexDirection: `column`,
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
              height: `100%`,
            }}
          >
            <main>{children}</main>
            <footer className="mt-auto" style={{width: `100%`, padding: `5% 0`, display: `flex`, flexDirection: `row`, alignItems: `center`}}>
              © {new Date().getFullYear()} mdzkm.
              <div className="footer-icons ml-auto">
                  <a href="https://www.github.com/MDzkM" target="_blank" rel="noopener noreferrer" title="Github"><Icon icon={socialGithubCircular} style={{fontSize: '53.33px'}} /></a>
                  <a href="https://www.gitlab.com/MDzkM" target="_blank" rel="noopener noreferrer" title="Gitlab"><Icon icon={gitlabCircle} style={{fontSize: '48px'}} /></a>
                  <a href="https://www.youtube.com/channel/UCIeCJ3CGn5ciVIEDNzkuABg" target="_blank" rel="noopener noreferrer" title="Youtube"><Icon icon={youtubeCircle} style={{fontSize: '48px'}} /></a>
                  <a href="https://www.linkedin.com/in/MDzkM" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Icon icon={linkedinCircle} style={{fontSize: '48px'}} /></a>
              </div>
            </footer>
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
