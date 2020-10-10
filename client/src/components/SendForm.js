import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class SendForm extends Component {
  state = {
    email: "",
    navn: "",
    adresse: "",
    skadestype: "",
    telefon: 0,
    dato: 0,
    beskrivelse: ""
  };



  /*changePictures = (e) => {
    var fileName = "";
    fileName = e.target.value
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
      this.setState({picture: e.target.value})
    }else {
      e.target.value = ""
    alert("Kun jpg/jpeg eller png filer er tilladt!");
  }
}*/

changeDate = (e) => {
  this.setState({dato: e.target.value})
}

changeEmail = (e) => {
  this.setState({email: e.target.value})
}

changeName = (e) => {
  this.setState({navn: e.target.value})
}

changePhone = (e) => {
  this.setState({telefon: e.target.value})
}

changeType = (e) => {
  this.setState({skadestype: e.target.value})
}

descChange = (e) => {
  this.setState({beskrivelse: e.target.value})
}

changeAddress = (e) => {
  this.setState({adresse: e.target.value})
}


sendMail = event => {
  event.preventDefault();
  
  fetch("/sendSkade", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    mode: "cors",
    method: "POST",
    body: JSON.stringify({
      email: this.state.email,
      navn: this.state.navn,
      adresse: this.state.adresse,
      skadestype: this.state.skadestype,
      telefon: this.state.telefon,
      dato: this.state.dato,
      beskrivelse: this.state.beskrivelse,
    })
  })

 
  alert("Tak for din besked, vi vil vende tilbage med svar snarest muligt.");
  window.location.href = "/"

};

 

  render() {
    return (
      <div className="form-container">
        <div id="form-top">
          <h1>Anmeld Skade</h1>
          <hr />
          <i className="fas fa-envelope fa-4x" />
        </div>
        <div id="form-actual">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.changeEmail} type="email" placeholder="Indtast Mail" />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Foreningens navn</Form.Label>
                <Form.Control onChange={this.changeName} type="text" placeholder="Fulde Navn" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Adresse</Form.Label>
              <Form.Control onChange={this.changeAddress} placeholder="Adresse" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Skadestype</Form.Label>
              <Form.Control
                onChange={this.changeType}
                id="skadestype"
                as="select"
              >
                <option>Anden pludselig skade</option>
                <option>Arbejdsskade Briller</option>
                <option>Arbejdsskade person</option>
                <option>Arbejdsskade tand</option>
                <option>Auto ansvar</option>
                <option>Auto Kasko</option>
                <option>Bestyrelsesansvar</option>
                <option>Brand</option>
                <option>Cykeltyveri</option>
                <option>Dødsfald</option>
                <option>Dørsprængning</option>
                <option>Entrepriseskade</option>
                <option>Erhvervsansvar</option>
                <option>Frostsprængning</option>
                <option>Glasskade</option>
                <option>Graffiti</option>
                <option>Hjemmerøveri</option>
                <option>Husejeransvar</option>
                <option>Hærværk</option>
                <option>Ikke dækningsberettiget</option>
                <option>Indbrud</option>
                <option>Insektskade</option>
                <option>Keramisk kogeplade</option>
                <option>Kollision</option>
                <option>Kortslutning</option>
                <option>Kummeskade</option>
                <option>Lynnedslag</option>
                <option>Låseomstilling</option>
                <option>Personskade død</option>
                <option>Personskade invaliditet</option>
                <option>Produktansvar</option>
                <option>Prof. Ansvar</option>
                <option>Påkørsel</option>
                <option>Påsejling</option>
                <option>Ran</option>
                <option>Retshjælp</option>
                <option>Rotteangreb</option>
                <option>Rørskade</option>
                <option>Røveri</option>
                <option>Rådskade</option>
                <option>Sanitet</option>
                <option>Simpelt tyveri</option>
                <option>Skimmelsvamp</option>
                <option>Skybrud</option>
                <option>Stikledning</option>
                <option>Storm</option>
                <option>Svampeskade</option>
                <option>Sygdom - Sundhed</option>
                <option>Sætningsskade</option>
                <option>Tøbrud</option>
                <option>Udvidet vandskade</option>
                <option>Vandskade</option>
                <option>Vasketøjsskade</option>
              </Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Telefon</Form.Label>
                <Form.Control onChange={this.changePhone} type="text" placeholder="Indtast Telefon Nr." />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Dato</Form.Label>
                <Form.Control onChange={this.changeDate} type="text" placeholder="DD-MM-ÅÅÅÅ" />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Beskrivelse</Form.Label>
              <Form.Control
                onChange={this.descChange}
                id="beskrivelse"
                as="textarea"
                rows="3"
              />
            </Form.Group>

            <Button onClick={this.sendMail} variant="primary" type="submit">
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

export default SendForm;
