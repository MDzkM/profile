import React, { Component } from "react"
import { Styles } from "./style"
import { Link } from "gatsby"
import Image from "../../image"

class FeaturedProjects extends Component {
    render() {
        return (
            <Styles>
                <div className="background-card">
                    <h2 className="title">PROJECTS I'VE WORKED ON</h2>
                    <div className="project-row">
                        <div className="project-card">
                            <div className="img-wrapper">
                                <Image imgName="taman-siswa.png" alt="taman-siswa"></Image>
                            </div>
                            <h4>TAMAN SISWA</h4>
                            <h5 className="subtitle-link"><a href="https://epic-thompson-4f4568.netlify.app/" target="_blank" rel="noopener noreferrer" title="Official website of Taman Siswa">taman-siswa.com</a></h5>
                            <br/>
                            <p style={{textAlign: `justify`, textJustify: `inter-word`}}>During the development of this website, it was the biggest project that I have ever been contracted for. Along with the team at Webmakers ID we finished developing this website in the course of several months. The website itself functions as the main platform for a startup by the name of Taman Siswa to interact with their customers. The technology stacks used was React (with Gatsby) and Django REST.</p>
                            <br/>
                            <Link className="read-more" to="/projects">Read more</Link>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-card">
                            <div className="img-wrapper">
                                <Image imgName="compfest.png" alt="compfest"></Image>
                            </div>
                            <h4>COMPFEST 12</h4>
                            <h5><a href="https://www.compfest.id" target="_blank" rel="noopener noreferrer" title="Official website of COMPFEST">compfest.id</a></h5>
                            <br/>
                            <p style={{textAlign: `justify`, textJustify: `inter-word`}}>I was lucky to get the chance to work in the IT division of the COMPFEST 12 committee as a senior developer. The website went through several iterations over the course of its lifetime to serve as the main platform for not only external, but also internal purposes. I mainly work as a frontend developer using React.</p>
                            <br/>
                            <Link className="read-more" to="/projects">Read more</Link>
                        </div>
                        <div className="project-card">
                            <div className="img-wrapper">
                                <Image imgName="ev.png" alt="ev"></Image>
                            </div>
                            <h4>EV</h4>
                            <h5 className="subtitle-link">a cute little bulb</h5>
                            <br/>
                            <p style={{textAlign: `justify`, textJustify: `inter-word`}}>During the development of COMPFEST 12's website, I was also tasked to recreate the official mascot (EV) in a three dimensional form. Using the initial image provided by the Visual Design team as a base model, I constructed the model using Blender and was later showcased in the website with the help of Unity.</p>
                            <br/>
                            <Link className="read-more" to="/projects">Read more</Link>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}

export default FeaturedProjects