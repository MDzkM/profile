import React, { Component } from "react"
import { Styles } from "./style"
import { Link } from "gatsby"
import Image from "../../image"

class FeaturedProjects extends Component {
    render() {
        return (
            <Styles>
                <div className="background-card">
                    <h1 className="title">- PROJECTS I'VE WORKED ON -</h1>
                    <div className="project-card">
                        <div className="img-wrapper">
                            <Image imgName="compfest.png" alt="compfest"></Image>
                        </div>
                        <h4>COMPFEST 12</h4>
                        <h5><a href="compfest.id">compfest.id</a></h5>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis erat cursus, feugiat eros accumsan, sollicitudin neque. Curabitur commodo vitae purus non.</p>
                        <br/>
                        <Link to="/" style={{textDecoration: `none`}}>Read more</Link>
                    </div>
                    <hr/>
                    <div className="project-card">
                        <div className="img-wrapper">
                            <Image imgName="taman-siswa.png" alt="taman-siswa"></Image>
                        </div>
                        <h4>TAMAN SISWA</h4>
                        <h5 className="subtitle-link">taman-siswa.com</h5>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis erat cursus, feugiat eros accumsan, sollicitudin neque. Curabitur commodo vitae purus non.</p>
                        <br/>
                        <Link to="/" style={{textDecoration: `none`}}>Read more</Link>
                    </div>
                    <hr/>
                    <div className="project-card">
                        <div className="img-wrapper">
                            <Image imgName="jmconstrindo.png" alt="jconstrindo"></Image>
                        </div>
                        <h4>JM CONSTRINDO</h4>
                        <h5 className="subtitle-link">jmconstrindo.id</h5>
                        <br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis erat cursus, feugiat eros accumsan, sollicitudin neque. Curabitur commodo vitae purus non.</p>
                        <br/>
                        <Link to="/" style={{textDecoration: `none`}}>Read more</Link>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default FeaturedProjects