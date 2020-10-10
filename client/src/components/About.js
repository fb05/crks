import React from "react";
import pic0 from "../assets/img/pic1.jpg";
import pic1 from "../assets/img/image001.jpg";
import pic2 from "../assets/img/image002.jpg";
import pic3 from "../assets/img/image003.jpg";
import pic4 from "../assets/img/image004.jpg";
import pic5 from "../assets/img/image005.jpg";
import pic6 from "../assets/img/image006.jpg";
import pic7 from "../assets/img/image007.jpg";
import pic8 from "../assets/img/image008.jpg";
import pic9 from "../assets/img/image009.jpg";
import unknownpic from "../assets/img/unknownpic.png";
import jbh from "../assets/img/jbh.jpg";
import { Jumbotron, Image, Container, Row, Col } from "react-bootstrap";
import Footer from './Footer';
//md={{ offset: 1 }} sættes på Col
const About = () => (
  <div className="about-container">
    <Jumbotron id="about-jumb">
      <h1>Om Os</h1>
      
    </Jumbotron>

    <div className="about-info">
      <Container>
        <h1 id="header-title">"Vi svarer personligt"</h1>
        <hr id="about-hr" />
        <br/>
        <Row>
          <Col className="vælgdsa" >
            <h4>Hvorfor vælge os?</h4>
            <hr/>
            <p>
              Du skal vælge DSA, fordi vi siden 1996 målrettet har fokuseret på
              at levere kvalitetsydelser inden for forsikringsløsninger for ejer-
              og andelsboligforeninger, samt udlejningsejendomme. 
              <hr />
              Vi er i dag 10
              ansatte, som administrerer mere end 1000 tilfredse andelsbolig- og
              ejerforeninger samt et stort antal bolig- og erhvervsejendomme.
              Jeres ejendom er unik, og vi sætter en ære i at give jer den
              rigtige personlige rådgivning om ejendomsforsikringer, og sikre
              korrekte dækninger til de bedst mulige priser. 
              <hr />
              Hos DSA vil I ikke
              opleve at blive placeret i en rammeaftale, men vil blive behandlet
              individuelt og 100% uafhængigt af forsikringsselskaberne.
            </p>
          </Col>
          <Col className="kontaktinfo" md={{ offset: 2 }}>
            <h2>Kontakt Info</h2>
            <hr/>
            <h5>Adresse</h5>
            <p>Allegade 14, 2000 Frederiksberg</p>
            <hr/>
            <h5>Mail</h5>
            <p>dsa@systemassurance.dk</p>
            <hr/>
            <h5>Telefon</h5>
            <p>33 79 60 60</p>
            <hr/>
            <h5>Fax</h5>
            <p>33 79 60 70</p>
            <hr/>
            
          </Col>
        </Row>
      </Container>
    </div>

    <h1 id="team">Hvem er vi ?</h1>
    <hr className="hr-width" />
    <Container>
      <Row noGutters={true}>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic6} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Michael Olsson</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Direktør og Forsikringsekspert</p>
            <p>Email: mo@systemassurance.dk </p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic7} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Rene Andersen </h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: ra@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }} noGutters={true}>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic1} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Birgitte Olsson</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: bo@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic8} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Rene Stennicke</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: rs@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }} noGutters={true}>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic4} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Johnny B Hansen</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Salgsdirektør</p>
            <p>Email: jbh@systemassurance.dk</p>
            <p>Mobil: 53 78 10 11</p>
            <a href="https://www.linkedin.com/in/johnny-b-hansen-01802a47" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic2} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Henrik Christiansen</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: hc@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }} noGutters={true}>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic3} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Jeanette Mia Nielsen</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: jn@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic9} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Søs Olsson</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: eo@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }} noGutters={true}>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={unknownpic} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Annie Madsen</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: am@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
        <Col md={{ offset: 1 }}>
          <Image className="billede" src={pic5} roundedCircle />
          <div style={{marginLeft:50}} className="billede-info">
            <h5>Michael Lund Hansen</h5>
            <hr style={{ width: 110, margin: 0 }} className="about-pic" />
            <p>Forsikringsekspert</p>
            <p>Email: ml@systemassurance.dk</p>
            <i className="fab fa-linkedin fa-2x" />
          </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </div>
);

export default About;
