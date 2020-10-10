import React from "react";
// eslint-disable-next-line 
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const About = () => (
  <div className="about-container">
  

    <div className="about-info">
      <Container>
        <h1 className="about-header-title">Markedsfør din hjemmeside</h1>
          
      </Container>
      <video className="aboutvid" width="960" height="540" controls >
      <source src="https://www.youtube.com/watch?v=bd7eX2u1WUY&ab_channel=SimonKepp" type="video/mp4"/>
      </video>
   </div>
  </div>
);

export default About;
