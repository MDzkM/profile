import React, { Component } from "react"
import { Styles } from "./style"
import TopLanding from "./TopLanding"
import FeaturedProjects from "./FeaturedProjects"

class LandingPage extends Component {
    render() {
        return(
            <Styles>
                <TopLanding />
                <FeaturedProjects />
            </Styles>
        )
    }
}

export default LandingPage