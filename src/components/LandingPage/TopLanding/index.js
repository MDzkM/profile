import React, { Component } from "react"
import { Styles } from "./style"
import Image from "../../image"

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
                        <h5 className="alias">a.k.a. mdzkm</h5>
                        <p>Hi there! I’m a full stack web developer and an aspiring game developer who is currently studying in <a href="https://www.ui.ac.id" className="universitas-indonesia">Universitas Indonesia</a>.</p>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default TopLanding