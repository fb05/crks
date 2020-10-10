import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home-container">
      <div className="jumbotron-container">
        <Jumbotron>
          
          <h1 className="welcomeNote">Velkommen til Dansk System Assurance Forsikringsmæglere A/S</h1>
          
          <p>Specialister i ejendomsforsikringer</p>
        </Jumbotron>
      </div>
      <div className="layout-container">
        <Container >
          <Row className="rowFlipbox" >
            <div className="layout-col">
              <Col>
                <i className="fas fa-file fa-4x" />
                <hr />
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <br />
                      <h2>Fuldmagt</h2>
                    </div>
                    <div className="flip-box-back">
                      <br />
                      <p>
                        <b>
                          Med en fuldmagt indhentes de nødvendige police og
                          skadesoplysninger i nuværende forsikringsselskab.
                          Derudover udfærdiges en samarbejdsaftale.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>

            <div className="layout-col">
              <Col>
                <i className="fas fa-search-plus fa-4x" />
                <hr />

                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <br />
                      <h2>Analyse</h2>
                    </div>
                    <div className="flip-box-back">
                      <br />
                      <p>
                        <b>
                          Vi gennemgår ejendommens eksisterende
                          forsikringsløsning og der udarbejdes en grundig
                          forsikringsanalyse og behovsdækning.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>

            <div className="layout-col">
              <Col>
                <i className="fas fa-envelope fa-4x" />
                <hr />
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <br />
                      <h2>Udbud</h2>
                    </div>
                    <div className="flip-box-back">
                      <br />
                      <p>
                        <b>
                          Udbudet sendes til de relevante forsikringsselskaber,
                          og vi vender tilbage med en, for jer, optimal
                          forsikringsløsning. Vi gennemgår tilbuddet i fælleskab
                          og I træffer beslutningen, men ansvaret og arbejdet er
                          vores.
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>

            <div className="layout-col">
              <Col>
                <i className="fas fa-hands-helping fa-4x" />
                <hr />
                <div className="flip-box">
                  <div className="flip-box-inner">
                    <div className="flip-box-front">
                      <br />
                      <h2>
                        Forsikrings-
                        <br />
                        løsning
                      </h2>
                    </div>
                    <div className="flip-box-back">
                      <br />
                      <p>
                        <b>
                          Med den nye <br /> forsikringsløsning <br /> kan du
                          nemt <br />
                          overskue jeres ejendoms- forsikringer, præmier, skader
                          mv ...
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
          <br />
          <br />
          </Container>

          <Container className="textfields">
                                    
          <Row>
            <h5><u><b>
              De ovennævnte arbejdsmetoder og et samarbejde med dsa, sikrer dig:
              </b></u></h5>
          </Row>
          

          <div className="samarbejde">
          <Row>
            <ul>
              <li>Uvildig rådgivning</li>
              <li>Bedre overblik</li>
              <li>Lavere præmie</li>
              <li>Udvidet forsikringsdækning</li>
              <li>Let og enkel skadesanmeldelse</li>
              <li>Større tryghed</li>
            </ul>
          </Row>
          </div>
          <hr/>
          <br/>
          <Row>
            <p>
           
              <br />
              <b>Forsikringsmæglerens opgaver.</b>
              <br />
              
              DSA vil, med udgangspunkt i Lov om Forsikringsformidling, yde en
              <b> uafhængig</b> og <b>loyal</b> forsikringsrådgivning og derigennem varetage
              foreningens forsikringsinteresser.
              <hr/>
              
              <br />
              <h5><b>I praksis vil det sige;</b></h5>
              
              
              <br />
              <b>Varetage skadessager</b>, herunder anmeldelse til forsikringsselskaber
              samt sikre opnåelse af retmæssige erstatningskrav. Skadeanmeldelse
              vil i øvrigt kunne foregå pr. telefon/mail m.v. til DSA dagligt.
              Løbende at tilsikre korrekte forsikringer til konkurrencedygtige
              markedspriser. Rådgive omkring forsikringsspørgsmål og relaterede
              opgaver.
              <hr/>
              
              <br />
              <b>Aflønning</b>: DSA’s vederlag udgøres normalt af en løbende årlig
              formidlingsprovision som en procentdel af den, til enhver tid, gældende
              årspræmie for ejendomsforsikringer. Typisk svarende til den rabat
              vi opnår hos selskaberne. Formidlingsprovisionen opkræves som en
              del af den opkrævede årlige præmie. Præmien for foreningen vil
              være identisk med den præmie foreningen betaler til
              forsikringsselskabet i dag. Den samlede præmie/forsikringsudgift
              vil således være ens, uanset hvilken ”betjener” man vælger.
              <hr/>
              
              <br />
              <b>Samarbejdsaftaler</b>: DSA har aftaler med samtlige anerkendte
              forsikringsselskaber. Der udarbejdes en samarbejdsaftale og
              fuldmagt mellem forsikringstageren og DSA efter Finanstilsynets
              retningslinjer. DSA er medlem af Danske Forsikringsmæglere, og har
              herigennem tegnet professionel rådgiver ansvarsforsikring tillige
              med garanti- og underslæbsforsikring.
              <hr/>
              
              <br />
              <b>Fuldmagt</b>: Giver DSA
              bemyndigelse til at gå vores kunders ærinder. Fuldmagten
              underskrives og returneres til administrator eller DSA.
              <hr/>
              
              <br />
              <i>Med ovennævnte håber vi at have leveret en <u>tilfredsstillende </u> 
              orientering om vort overordnede virke, men er <u>naturligvis</u> til
              rådighed, hvis der måtte ønskes supplerende oplysninger eller et
              eventuelt møde.</i>
            </p>
          </Row>
          
        </Container>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
