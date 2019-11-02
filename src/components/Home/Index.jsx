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
        <Row >
            <Col md="6">
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
            <Col md="6">
                <p className="p-title">An open source voxel world - imagine the possibilities!</p>
                <p className="p-description">The Terasology project was born from a Minecraft-inspired tech demo and is becoming a stable platform for various types of gameplay settings in a voxel world.
            The creators and maintainers are a diverse mix of software developers, designers, game testers, graphic artists, and musicians. We encourage others to join!</p>
            <div className="center-btn">
            <button className="font-weight-bold btn btn-lg btn-success button"><Link to="/game" className="link-about">Learn More</Link></button>
            </div>  
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md="8">
                <Row>
                    <Col lg="7" >
                        <h3>GSOC 2019 - An Overview</h3>
                        <h6 >By: Niruandaleth &amp; Skaldarnar</h6>
                        <p className="text-justify">
                        It’s that time of the year again - Google Summer of Code (GSOC) is ahead of us. For the 4th year running we welcome students to become part of our community and join efforts with mentors...
                      </p>
                        <div className="text-center">
                            <a className="font-weight-bold btn btn-lg btn-success" href="">Learn More</a>
                        </div>
                    </Col>
                    <Col lg="5">
                        <Img
                            fluid={data.gsoc_2019.childImageSharp.fluid}
                            style={{ height: '100%' }}
                            alt="GSOC 2019" />
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md="8">
                <Row >
                    <Col lg="7" >
                        <h3>GSOC 2018 - Results</h3>
                        <h6>By: Cervator</h6>
                        <p className="text-justify">
                        For Google Summer of Code (GSOC) 2018 we had 9 awesome students working on a mix of content tasks and other improvements.
                      </p>
                        <div className="text-center">
                            <a className="font-weight-bold btn btn-lg btn-success" href="">Learn More</a>
                        </div>
                    </Col>
                    <Col lg="5">
                        <Img
                            fluid={data.gsoc_2018.childImageSharp.fluid}
                            style={{ height: '100%' }}
                            alt="GSOC 2019" />
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md="8">
                <Row>
                    <Col lg="7" >
                        <h3>Google Code-In with Tiled</h3>
                        <h6>By: Thorbjørn Lindeijer</h6>
                        <p className="text-justify">
                        MovingBlocks is once again participating in Google Code-In this year. Google Code-In is a program aimed at getting younger students...
                      </p>
                        <div className="text-center">
                            <a className="font-weight-bold btn btn-lg btn-success" href="">Learn More</a>
                        </div>
                    </Col>
                    <Col lg="5">
                        <Img
                            fluid={data.google_code.childImageSharp.fluid}
                            style={{ height: '100%' }}
                            alt="GSOC 2019" />
                    </Col>
                </Row>
            </Col>
        </Row>
        </section>
    )
}

export default Index
