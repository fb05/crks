var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var fs = require('fs')
//const creds = require("../config/config");

let transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "postmaster@sandboxece0883dc79d49e8b43777de9232c936.mailgun.org", // generated ethereal user
    pass: "56b4cb96a68f449b32eebfcfbee50a6e-6140bac2-e261138b" // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false
  }
});


router.post("/sendEjendom", function(req, res, next) {
  // create reusable transporter object using the default SMTP transport
  const { navn, email, telefon, cvr, administrator } = req.body;
  //console.log(navn, email, telefon, cvr, administrator)

  // setup email data with unicode symbols
  let mailOptions = {
    from: `${email}`, // sender address
    to: "dsa@systemassurance.dk", // list of receivers
    subject: `Ejendomsforsikring`, // Subject line
    text: `Navn: ${navn} \nTelefon: ${telefon} \nCVR: ${cvr} \nAdministrator: ${administrator}`, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json({ message: "success" });
  });
});

router.post("/sendEntreprise", function(req, res, next) {
  // create reusable transporter object using the default SMTP transport
  const { sum, adresse, email, periode, beskrivelse, telefon } = req.body;
  //console.log(sum, adresse, email, periode, beskrivelse, telefon)

  // setup email data with unicode symbols
  let mailOptions = {
    from: `${email}`, // sender address
    to: "dsa@systemassurance.dk", // list of receivers
    subject: `Entrepriseforsikring`, // Subject line
    text: `Sum: ${sum} \nAddresse: ${adresse} \nPeriode: ${periode} \nBeskrivelse: ${beskrivelse} \nTelefon: ${telefon}` , // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json({ message: "success" });
  });
});

router.post("/sendSkade", function(req, res, next) {
  //create reusable transporter object using the default SMTP transport
  const { email, navn, adresse, skadestype, picture, telefon, dato, beskrivelse } = req.body;
  console.log(email, navn, adresse, skadestype ,picture , telefon, dato, beskrivelse);

  // setup email data with unicode symbols
  let mailOptions = {
    from: `${email}`, // sender address
    to: "dsa@systemassurance.dk", // list of receivers
    subject: `Skadesanmeldelse`, // Subject line
    text: `Navn: ${navn} \nAdresse: ${adresse} \nSkadestype: ${skadestype} \nTelefon: ${telefon} \nDato: ${dato} \nBeskrivelse: ${beskrivelse}` , // plain text body
    /*attachments: [
      // String attachment
      {
          path: picture,
      }]*/
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.json({ message: "success" });
  });
});

module.exports = router;
