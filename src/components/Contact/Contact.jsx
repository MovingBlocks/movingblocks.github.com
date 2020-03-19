import React from "react";
import { Row, Col } from 'reactstrap';
import "./Contact.css";
import { IconContext } from "react-icons";
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaDiscord,
  FaYoutubeSquare,
  FaRedditSquare,
  FaGooglePlusSquare,
  FaComments
} from "react-icons/fa";


export default props => {
  const data = useStaticQuery(graphql`
    query myImages2{
      historyImg: file(relativePath: {eq: "images/3.jpg"}){
        childImageSharp{
          fluid(maxWidth: 300){
            ...GatsbyImageSharpFluid_tracedSVG
          }
      }
    },
    modding: file(relativePath: {eq: "images/9.jpg"}){
      childImageSharp{
        fluid(maxWidth: 300){
          ...GatsbyImageSharpFluid
        }
      }
    },
    community: file(relativePath: {eq: "images/8.jpg"}){
      childImageSharp{
        fluid(maxWidth: 300){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`);

  return (
    <div className="contact">
      <div className="contact_bg">
        <div className="contact__bg-overlay">
          <Row className="justify-content-center">
            <Col md="10" className="justify-content-center">
              <h1>Contact Us</h1>
            </Col>
          </Row>
        </div>
      </div>
      <section className="contact__details py-5 mt-6e">
        
      <Row>
           <IconContext.Provider value={{ size: "6em"}}>
            <a 
            style={{padding:"7px"}}
              className="link"
              href="https://github.com/MovingBlocks/Terasology"
            >
              <FaGithubSquare />
              <br></br>
             <center> Github</center> 
            </a>
            
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a 
            style={{padding:"7px"}} 
            className="link" href="https://www.facebook.com/Terasology">
              <FaFacebookSquare />
              <br></br>
             <center> Facebook</center> 
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a 
            style={{padding:"7px"}} 
            className="link" href="https://twitter.com/terasology">
              <FaTwitterSquare />
              <br></br>
             <center> Twitter</center> 
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a 
            style={{padding:"7px"}}
            className="link" href="https://discord.gg/terasology">
              <FaDiscord />
              <br></br>
             <center> Discord </center> 
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a
            style={{padding:"7px"}}
              className="link"
              href="https://www.youtube.com/user/blockmaniaTV"
            >
              <FaYoutubeSquare />
              <br></br>
             <center> Youtube </center> 
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a 
            style={{padding:"7px"}}
            className="link" href="https://reddit.com/r/Terasology">
              <FaRedditSquare />
              <br></br>
             <center> Reddit  </center> 
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a
            style={{padding:"7px"}}
              className="link"
              href="https://plus.google.com/103835217961917018533"
            >
              <FaGooglePlusSquare />
              <br></br>
             <center> Google Plus</center> 
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "6em" }}>
            <a 
            style={{padding:"7px"}}
              className="link"
              href="http://webchat.freenode.net/?channels=terasology&uio=d4?channels=%23terasology&nick=Terasologist...&prompt=1&useUserListIcons=true"
            >
              <FaComments />
              <br></br>
             <center> Webchat</center> 
            </a>
          </IconContext.Provider>
       
      </Row>        
      </section>
    </div>
  )
};
