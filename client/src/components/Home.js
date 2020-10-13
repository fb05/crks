import React from "react";
// eslint-disable-next-line 
import { Jumbotron, Container, Row, Col } from "react-bootstrap";


const Home = () => {
  return (
    <div className="home-container">
      <Container>
        <Col className="welcomeNote">
          <br />

          <h1>Velkommen til CRKS Digital</h1>
          <hr />
          <h4>Gør din online marketing bedre!</h4>
        </Col>
        <br />
        <Row>
          <Col className="homeInfo">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <p>Gør din online marketing bedre!!</p>
          </Col>
          <Col>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col>
          <h3> Hvad gør vi?</h3>
          <br/>
          <p> Vi skaber et flow af kunder til din forretning. Fremtidens handel er på nettet, derfor skal du også være det!</p>
          </Col>

        </Row>
      </Container>


    </div>
  );
};

export default Home;
