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

import { getLightMode } from "../services/useLightMode"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lightMode: false,
      children: null
    }
  }

  componentDidMount() {
    this.setState({
      lightMode: getLightMode(),
      children: this.props.children
    })
  }

  render() {
    const { lightMode, children } = this.state
    const mode = lightMode ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={mode}>
        <>
          <GlobalStyles />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
          <Header />
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              margin: `0 auto`,
              maxWidth: 960,
              height: `100%`,
            }}
          >
            <main>{children}</main>
            <footer className="mt-auto" style={{paddingLeft:  `1.0875rem`, paddingRight:  `1.0875rem`, width: `100%`, paddingTop: `5%`, paddingBottom: `5%`, display: `flex`, flexDirection: `row`, alignItems: `center`}}>
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
