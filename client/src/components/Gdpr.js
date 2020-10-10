import React, { Component } from "react";
import { Container, Row} from "react-bootstrap";


class Gdpr extends Component {
    state = {};
    render() {
        return (
            <div >
                <div className="gdprTop">
                    <h1 className="gdprOverskrift">
                        Dansk System Assurance A/S
                        Persondatapolitik
                    </h1>
                </div>
                <br/>
                
                <Container id="gdprt">
                    
                <h2>GDPR</h2>
                <hr/>
                    <Row>
                        
                        <p><i><b>Her kan du læse</b>, hvordan DANSK SYSTEM ASSURANCE A/S håndterer personoplysninger.
                        Behandling af personoplysninger er reguleret af EU Persondataforordningen
                        (&quot;Persondataforordningen&quot;) og Databeskyttelsesloven (&quot;Databeskyttelsesloven&quot;) (tilsammen
                        &quot;Databeskyttelseslovgivningen&quot;).</i></p>
                        
                    </Row>
                <hr/>
                    <Row><h4>Dataansvarlig</h4></Row>
                    <Row><p>DANSK SYSTEM ASSURANCE A/S er dataansvarlig, og vi sørger for at behandling af dine
                        personoplysninger sker i overensstemmelse med lovgivningen.
                        Vores kontaktoplysninger er:
                        DANSK SYSTEM ASSURANCE A/S
                        Allègade 14
                        2000 Frederiksberg
                        Mail: dsa@systemassurance.dk</p>
                    </Row>
                <hr/>
                    <Row><h4>Videregivelse af oplysninger</h4></Row>
                    <Row><p>Vi videregiver dine personoplysninger til de valgte forsikringsselskaber, i forbindelse med
                            etablering, ændring, administration og ophør af forsikringsforhold og aftaler.</p></Row>
                <hr/>
                    <Row><h4>Dine rettigheder</h4></Row>
                    <Row><ul>

                        <li>Du har ret til at få indsigt i, hvilke personoplysninger vi behandler om dig</li>
                        <li>Du har ret til at få berigtiget og ajourført de personoplysninger, vi har registreret om
                            dig
                        </li>
                        <li>Du har ret til at få slettet de personoplysninger, vi har registreret om dig. Ønsker du at
                            få slettet dine personoplysninger, skal du rette henvendelse til firmaadministratoren i
                            din virksomhed, som har adgang til at oprette og slette oplysninger om medarbejdere
                            ansat i egen virksomhed.
                        </li>
                        <li>Hvis du er i tvivl om, hvem der er firmaadministrator i jeres virksomhed, kan du
                            kontakt DANSK SYSTEM ASSURANCE A/S.
                        </li>

                    </ul>
                    </Row>
                <hr/>
                    <Row><h4>Fysisk sikkerhed</h4></Row>
                    <Row><p>Servere og andet udstyr, hvorpå der behandles personoplysninger, befinder sig i aflåst rum
                        Serverrum er beskyttet mod brand og tyveri
                        Oplysninger på papir eller andet fysisk eller manuelt medie opbevares aflåst, når de ikke er i
                        brug</p>
                    </Row>
                <hr/>
                    <Row><h4>Systemsikkerhed</h4></Row>
                    <Row><p>Servere og kommunikationslinjer er beskyttet af markedskonform firewall og virusbeskyttelse</p></Row>
                <hr/>
                    <Row><h4>Organisatorisk sikkerhed</h4></Row>
                    <Row><p>Adgang til personoplysninger er begrænset til ansatte og andre, der har et sagligt behov for
                        adgang til oplysningerne
                        Adgang til oplysninger er passwordbeskyttet
                        Ansatte og andre, der skal have adgang til oplysningerne, modtager et unikt og personligt
                        password
                        Password må ikke overdrages eller overlades til andre
                        Der er etableret procedurer for ajourføring og deaktivering af tildelte passwords såvel periodisk
                        som ved fratrædelser og andre rolleskift
                        Alle ansatte er pålagt tavshedspligt
                        Ansatte, der behandler persondata, modtager instruktion og træning i beskyttelse af
                        persondata</p></Row>
                <hr/>
                    <Row><h4>Hvor længe opbevarer vi oplysningerne?</h4></Row>
                    <Row><p>Personoplysninger slettes, når der ikke længere er et sagligt formål med fortsat opbevaring.</p></Row>
                    <br />

                <hr/>    
                    <Row><h4>Klageinstans</h4></Row>
                    <Row><p>Du har mulighed for at klage over vores behandling af personoplysninger om dig til
                                Datatilsynet. Se kontaktoplysninger og mere om klageadgang her: <a href="https://www.datatilsynet.dk/">www.datatilsynet.dk</a></p>
                    </Row>
                </Container>
                
                
                
            </div>

        );
    }
}

export default Gdpr;
