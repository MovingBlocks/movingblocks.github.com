import React from 'react'
import "./Index.css";
import { Row, Col } from 'reactstrap';
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Index = () => {
    const data = useStaticQuery(graphql`
    query homeImages{
    gsoc_2019: file(relativePath: {eq: "images/6.jpg"}){
        childImageSharp{
          fluid(maxWidth: 300){
            ...GatsbyImageSharpFluid_tracedSVG
          }
      }
    },
    gsoc_2018: file(relativePath: {eq: "images/11.jpg"}){
      childImageSharp{
        fluid(maxWidth: 300){
          ...GatsbyImageSharpFluid
        }
      }
    },
    google_code: file(relativePath: {eq: "images/5.jpg"}){
      childImageSharp{
        fluid(maxWidth: 300){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`);
    console.log(data);
    return (
        <section className="sect-home">
            <Row>
                <Col md="12">
                    <div>
                        <h1 className="text-center">Welcome To Terasology</h1>
                        <hr />
                    </div>
                </Col>
            </Row>
            <Row >
                <Col md="7">
                    <h3>What is Terasology?</h3>
                    <p className="p-title">An open source voxel world - imagine the possibilities!</p>
                    <p className="p-description">The Terasology project was born from a Minecraft-inspired tech demo and is becoming a stable platform for various types of gameplay settings in a voxel world.
                    The creators and maintainers are a diverse mix of software developers, designers, game testers, graphic artists, and musicians. We encourage others to join!</p>
                    <div className="center-btn">
                        <button className="font-weight-bold btn btn-lg btn-success button"><Link to="/game" className="link-about">Learn More</Link></button>
                    </div>
                </Col>
                <Col md="5">
                    <div className="index">
                        <iframe
                            src="https://www.youtube.com/embed/Wpa2aiadwE8"
                            title="Terasology trailer"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            frameBorder="0"
                            webkitallowfullscreen="true"
                            mozallowfullscreen="true"
                            allowFullScreen
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <h1 className="text-center">Blog</h1>
                    <hr />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="8">
                    <Row>
                        <Col lg="5">
                            <Img
                                fluid={data.gsoc_2019.childImageSharp.fluid}
                                style={{ height: '100%' }}
                                alt="GSOC 2019" />
                        </Col>
                        <Col lg="7" >
                            <h3>GSOC 2019 - An Overview</h3>
                            <h6 >By: Niruandaleth &amp; Skaldarnar</h6>
                            <p className="text-justify">
                                It’s that time of the year again - Google Summer of Code (GSOC) is ahead of us. For the 4th year running we welcome students to become part of our community and join efforts with mentors and other
                                contributors to make Terasology even more awesome! This year we also have a personal first: We are listed as “The Terasology Foundation”!
                      </p>
                            <div className="text-center">
                                <a className="font-weight-bold btn btn-lg btn-success" href="">Learn More</a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="8">
                    <Row >
                        <Col lg="5">
                            <Img
                                fluid={data.gsoc_2018.childImageSharp.fluid}
                                style={{ height: '100%' }}
                                alt="GSOC 2019" />
                        </Col>
                        <Col lg="7" >
                            <h3>GSOC 2018 - Results</h3>
                            <h6>By: Cervator</h6>
                            <p className="text-justify">
                                For Google Summer of Code (GSOC) 2018 we had 9 awesome students working on a mix of content tasks and other improvements.
                        </p>
                            <p>
                                All students projects were successful and passed, although as usual predicting exactly how far along a project will get over the summer can be tricky so there's still some more work to do on some.
                        </p>
                            <div className="text-center">
                                <a className="font-weight-bold btn btn-lg btn-success" href="">Learn More</a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md="8">
                    <Row>
                        <Col lg="5">
                            <Img
                                fluid={data.google_code.childImageSharp.fluid}
                                style={{ height: '100%' }}
                                alt="GSOC 2019" />
                        </Col>
                        <Col lg="7" >
                            <h3>Google Code-In with Tiled</h3>
                            <h6>By: Thorbjørn Lindeijer</h6>
                            <p className="text-justify">
                                MovingBlocks is once again participating in Google Code-In this year. Google Code-In is a program aimed at getting younger students involved in open source projects, by having them complete tasks set up by these projects.
                                It runs from 28th of November to 17th of January. There are plenty of tasks set up for you to have fun with!
                      </p>
                            <div className="text-center">
                                <a className="font-weight-bold btn btn-lg btn-success" href="">Learn More</a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Index
