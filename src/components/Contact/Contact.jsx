import React from "react";
import { Row, Col } from 'reactstrap';
import "./Contact.css";
import { IconContext } from "react-icons";

import {
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaDiscord,
  FaYoutubeSquare,
  FaRedditSquare,
  FaComments
} from "react-icons/fa";


export default () => {
  
  return (
    <div className="contact">
      <div className="contact_bg">
        <div className="contact_bg-overlay">
          <Row className="justify-content-center">
            <Col md="10" className="justify-content-center">
              <h1>Contact Us</h1>
            </Col>
          </Row>
        </div>
      </div>
      <section className="contact_details py-4 mt-6e">
        <center> 
    
          <h5>Be part of the community by joining the following handles</h5>
          <br />


          <Row style={{marginLeft:'15px'}}>
            <IconContext.Provider value={{ size: "4em"}}>
              <a 
                style={{padding:"5px"}}
                className="link"
                href="https://github.com/MovingBlocks/Terasology"
              >
                <center>
                  <FaGithubSquare style={{color:'#000000'}} />
                  <br />
                  Github
                </center> 
              </a>
            
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "4em" }}>
              <a 
                style={{padding:"5px"}} 
                className="link"
                href="https://www.facebook.com/Terasology"
              >
                <center> 
                  <FaFacebookSquare style={{color:'#3b5998'}} />
                  <br />
                  Facebook
                </center> 
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "4em" }}>
              <a 
                style={{padding:"5px"}} 
                className="link"
                href="https://twitter.com/terasology"
              >
                <center> 
                  <FaTwitterSquare style={{color:'#00acee'}} />
                  <br />
                  Twitter
                </center> 
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "4em" }}>
              <a 
                style={{padding:"5px"}}
                className="link"
                href="https://discord.gg/terasology"
              >
                <center> 
                  <FaDiscord style={{color:'#7289da'}} />
                  <br />
                  Discord
                  {' '}
                </center> 
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "4em" }}>
              <a
                style={{padding:"5px"}}
                className="link"
                href="https://www.youtube.com/user/blockmaniaTV"
              >
                <center> 
                  <FaYoutubeSquare style={{color:'#c4302b'}} />
                  <br />
                  Youtube
                  {' '}
                </center> 
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "4em" }}>
              <a 
                style={{padding:"5px"}}
                className="link"
                href="https://reddit.com/r/Terasology"
              >
                <center> 
                  <FaRedditSquare style={{color:'#FF4301'}} />
                  <br />
                  Reddit
                  {' '}
                </center> 
              </a>
              <a 
                style={{padding:"5px"}}
                className="link"
                href="http://webchat.freenode.net/?channels=terasology&uio=d4?channels=%23terasology&nick=Terasologist...&prompt=1&useUserListIcons=true"
              >
                <center>  
                  <FaComments style={{color:'#7bb32e'}} />
                  <br />
                  Webchat
                </center> 
              </a>
            </IconContext.Provider>
          </Row> 
        </center>       
      </section>
    </div>
  )
};

