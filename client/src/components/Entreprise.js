import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class Entreprise extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
      sum: 0,
      adresse: "",
      email: "",
      periode: "",
      beskrivelse: "",
      telefon: 0

    };
  }

  changeSum = (e) => {
    this.setState({sum: e.target.value});
    
  }

  changeAdresse = (e) => {
    this.setState({adresse: e.target.value});

  }

  changePeriode = (e) => {
    this.setState({periode: e.target.value});

  }

  changeBeskrivelse = (e) => {
    this.setState({beskrivelse: e.target.value});
  
  }

  changeTelefon = (e) => {
    
    this.setState({telefon: e.target.value});
  
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value});
  }


  sendMail = event => {
    event.preventDefault();
    fetch("/sendEntreprise", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        sum: this.state.sum,
        adresse: this.state.adresse,
        email: this.state.email,
        periode: this.state.periode,
        beskrivelse: this.state.beskrivelse,
        telefon: this.state.telefon,
      })
    })
 
   
    alert("Tak for din besked, vi vil vende tilbage med svar snarest muligt.");
    window.location.href = "/"
  };

  
  
  render() {
    return (
      <div className="form-container">
        <div id="form-top">
          <h1>Entreprisetilbud</h1>
          <hr />
          <i className="fas fa-envelope fa-4x" />
        </div>
        <div id="form-actual">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Sum</Form.Label>
                <Form.Control type="number" value={this.state.sum} onChange={this.changeSum}/>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Adresse</Form.Label>
                <Form.Control type="text" placeholder="Paradisæblevej 111" onChange={this.changeAdresse}/>
              </Form.Group>
            </Form.Row>

              <Form.Group>
              <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" onChange={this.changeEmail}/>
              </Form.Group>
    

            <Form.Group>
              <Form.Label>Periode</Form.Label>
              <Form.Control placeholder="dd-mm-åååå til dd-mm-åååå" onChange={this.changePeriode}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control
                onChange={this.changeBeskrivelse}
                id="beskrivelse"
                as="textarea"
                rows="3"
                
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Telefon</Form.Label>
                <Form.Control type="number" placeholder="Indtast Telefon Nr." onChange={this.changeTelefon}/>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={this.sendMail}>
              Send
            </Button>
          </Form>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Entreprise;
