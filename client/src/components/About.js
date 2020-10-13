import React from "react";
// eslint-disable-next-line 
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/img/CRKS LOGO.png";
import Rasmusbilled from "../assets/img/rasmusbilled.JPG";
import Sammenbilled from "../assets/img/fællesbilled.JPG";
/*<video className="aboutvid" width="960" height="540" controls >
      <source src="https://www.youtube.com/watch?v=bd7eX2u1WUY&ab_channel=SimonKepp" type="video/mp4"/>
      </video>*/
const About = () => (
  <div className="about-container">
  

    <div className="about-info">
    <br/>
      <Container  className="a1r">
          <Col>
            <h1 className="about-header-title">Kontakt os</h1>
            <hr/>
          </Col>
          <br/>
          <br/>
          <br/>
        <Row>
          <Col>
          <br/>
          <br/>
          <br/>
          <h3>Ring eller skriv til os</h3>
          <h3>Vi vil <u>altid</u> gerne snakke med dig.</h3>
          </Col>
          <Col>
          <img src={Logo} alt="Logo" width="250" height="250"/>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col>
            <h4>
              Tlf:
            </h4>
            <h5><a href="tel:+4550462886">50 46 28 86</a></h5>
          </Col>
          <Col>
            <img src={Sammenbilled} alt="Logo" width="300" height="200"/>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col>
            <h4>
              Email:
            </h4>
            <h5><a href="mailto:crks321a@gmail.com">crks321a@gmail.com</a></h5>
          </Col>
          <Col>
            <img src={Rasmusbilled} alt="Logo" width="300" height="200"/>
          </Col>
        </Row>
        <br/>
      </Container>
      <br/>
   </div>
  </div>
);

export default About;
