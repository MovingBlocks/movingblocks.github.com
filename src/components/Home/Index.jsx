import React from 'react'
import "./Index.css";
import { Row, Col } from 'reactstrap';
import { Link } from 'gatsby'

const Index = ({ videoSrcURL, videoTitle }) => (
    <Row>
        <Col md="6">
            <div className="index">
                <iframe
                    src={videoSrcURL}
                    title={videoTitle}
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
            <button className="button"><Link to="/game" className="link-about">Learn More</Link></button>
        </Col>
    </Row>
)
export default Index
