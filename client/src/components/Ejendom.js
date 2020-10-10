import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class Ejendom extends Component {
  
   constructor(props) {
    super(props);
    this.state = {
      navn: "",
      telefon: 0,
      cvrnr: 0,
      email: "",
      administrator: ""
    };
  }

  changeNavn = (e) => {
    this.setState({navn: e.target.value});
    
  }

  changeTelefon = (e) => {
    this.setState({telefon: e.target.value});

  }

  changeCVRNR = (e) => {
    this.setState({cvrnr: e.target.value});

  }

  changeEmail = (e) => {
    this.setState({email: e.target.value});
  
  }

  changeAdministrator = (e) => {
    
    this.setState({administrator: e.target.value});
  
  }

  sendMail = event => {
    event.preventDefault();
    fetch("/sendEjendom", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      mode: "cors",
      method: "POST",
      body: JSON.stringify({
        navn: this.state.navn,
        email: this.state.email,
        telefon: this.state.telefon,
        cvr: this.state.cvrnr,
        administrator: this.state.administrator,
      })
    })
  
    
    alert("Tak for din besked, vi vil vende tilbage med svar snarest muligt.");
    window.location.href = "/"
  };
      

  
  
  render() {
    return (
      <div className="form-container">
        <div id="form-top">
          <h1>Ejendomsforsikring</h1>
          <hr />
          <i className="fas fa-envelope fa-4x" />
        </div>
        <div id="form-actual">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Foreningens navn</Form.Label>
                <Form.Control type="text" value={this.state.navn} onChange={this.changeNavn}/>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Telefon</Form.Label>
                <Form.Control type="number" placeholder="Indtast Telefon Nr" onChange={this.changeTelefon}/>
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>CVR Nr</Form.Label>
              <Form.Control type="number" placeholder="xxxxxxxx" onChange={this.changeCVRNR}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="dinmail@dinudbyder.dk" onChange={this.changeEmail}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Administrator</Form.Label>
                <Form.Control type="text" placeholder="Jens Jensen" onChange={this.changeAdministrator}/>
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

export default Ejendom;
