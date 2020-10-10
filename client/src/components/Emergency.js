import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Emergency extends Component {
  state = {};
  render() {
    return (
      <div className="emergency" >

        <div >
          <div className="divEmergency">
            <h1 className="emergencyOverskrift">Akuthjælp udenfor åbningstider</h1>
                
          </div>
          <br />
          <Container className="conEmergency">

            <Row>
              <Col>

                <h5>Disse links fører dig til de givne firmaers akutside. 
                  <br/>
                  Her kan du finde deres akutnummer, så du hurtigt kan få hjælp.</h5>
                <br />
                <hr/>


              </Col>
            </Row>

            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.axa-forsikring.dk/Anmeld-skade" rel="noopener noreferrer"><u>AXA Forsikring</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.alka.dk/kontakt-os" rel="noopener noreferrer"><u>Alka</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.almbrand.dk/abdk/Erhverv/Forsikring/Kundeservice/Anmeldskade/index.htm" rel="noopener noreferrer"><u>Alm. Brand</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.codan.dk/erhverv/anmeldskade/skadeanmeldelse" rel="noopener noreferrer"><u>Codan Forsikring</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5><a target="_blank" href="https://www.gjensidige.dk/privat/kundeservice" rel="noopener noreferrer"><u>Gjensidige</u></a></h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.hdi.global/dk/en/about-us/locations-contacts#tab1" rel="noopener noreferrer"><u>HDI Global SE</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.if.dk/erhverv/anmeld-skade" rel="noopener noreferrer"><u>If Skadesforsikring</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>
            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://www.topdanmark.dk/erhverv/kontakt-os/" rel="noopener noreferrer"><u>Topdanmark</u></a>
                </h5>
              </Col>
            </Row>
            <hr/>

            <Row>
              <Col>
                <h5>
                  <a target="_blank" href="https://tryg.dk/kundeservice/tryg-alarm" rel="noopener noreferrer"><u>Tryg</u></a>
                </h5>
              </Col>
            </Row>

          </Container>
        </div>

        <br />
      </div>
    );
  }
}

export default Emergency;
