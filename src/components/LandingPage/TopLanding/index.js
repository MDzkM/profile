import React, { Component } from "react"
import { Styles } from "./style"
import Image from "../../image"
import { Icon } from "@iconify/react"
import socialGithubCircular from "@iconify/icons-typcn/social-github-circular"
import gitlabCircle from "@iconify/icons-jam/gitlab-circle"
import youtubeCircle from "@iconify/icons-jam/youtube-circle"
import linkedinCircle from "@iconify/icons-jam/linkedin-circle"

class TopLanding extends Component {
    render() {
        return(
            <Styles>
                <div className="profile-container">
                    <div className="img-wrapper">
                        <Image imgName="profile-picture.jpg" />
                    </div>
                    <div className="description">
                        <h3>Muhammad Dzikra Muzaki</h3>
                        <h5 className="alias"><i>a.k.a.</i> mdzkm</h5>
                        <br/>
                        <p>Hi there! I’m a full stack web developer, Head of Design at <a href="https://www.webmakers.id" target="_blank" rel="noopener noreferrer" className="webmakers-id" title="Official website of Webmakers ID">Webmakers ID</a>, and an aspiring game-dev who is currently studying in <a href="https://www.ui.ac.id" target="_blank" rel="noopener noreferrer" className="universitas-indonesia" title="Official website of Universitas Indonesia">Universitas Indonesia</a>.</p>
                        <div className="accounts">
                            <a href="https://www.github.com/MDzkM" target="_blank" rel="noopener noreferrer" title="Github"><Icon icon={socialGithubCircular} style={{fontSize: '53.33px'}} /></a>
                            <a href="https://www.gitlab.com/MDzkM" target="_blank" rel="noopener noreferrer" title="Gitlab"><Icon icon={gitlabCircle} style={{fontSize: '48px'}} /></a>
                            <a href="https://www.youtube.com/channel/UCIeCJ3CGn5ciVIEDNzkuABg" target="_blank" rel="noopener noreferrer" title="Youtube"><Icon icon={youtubeCircle} style={{fontSize: '48px'}} /></a>
                            <a href="https://www.linkedin.com/in/MDzkM" target="_blank" rel="noopener noreferrer" title="LinkedIn"><Icon icon={linkedinCircle} style={{fontSize: '48px'}} /></a>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default TopLanding