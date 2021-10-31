import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../App.css";

const About = () => {
  return (
    <>
      <div className="welcometxt">
        <h1>Hei! Toivottavasti piditte sivustamme!</h1>

        <p>
          Me(Laura, Akseli, Emilia ja Salla) ollaan luokkakavereita Helsinki
          Business Collegessa ja valmistumme toukokuussa 2022 Full Stack Web
          Developereiksi. Idea tähän projektiin tulee oikeasta elämästä: Koko
          maailma on istunut kotona viimeisen puolentoista vuoden ajan, ja
          useimmat meistä on tässä ajassa löytäneet uusia harrastuksia,
          kokeilleet uusia asioita, tai hioneet vanhoja taitojaan, kuten
          käsitöitä. Se sai meidät miettimään, että jokainen meistä tuntee
          jonkun, joka tekee tälläkin hetkellä upeita käsitöitä: jotkut ihan
          vain huvin vuoksi, ja jotkut saadakseen hieman lisä elantoa. Syystä
          huolimatta, kaikki käsityöt ovat tehty rakkaudella. Tämä sivu on tehty
          heille, ja voimme taata, että tukemalla artesaaneja ja tilaamalla
          sivumme kautta saat vastineeksi ainutlaatuisen, käsintehdyn tuotteen.
        </p>
        <p>
          Tämä sivu on meidän vuoden 2021 kouluprojekti. Käytimme React.js:ia,
          Reduxia ja visuaalisella puolella käytimme CSS:a ja React Bootstrap
          Frameworkia. Backend on rakennettu PHP:ta, Symfonya, ja Node.js:ia
          käyttäen, ja hostattu Heroku.com:ssa.
        </p>
        <div className="bold">
          <p>
            Olemme matkalla julkaisemaan sivua kaikkien käyttöön, mutta vielä
            löytyy hiottavaa. Siihen asti, jos näet käsityön, johon rakastuit
            ensisilmäyksellä ja haluat sen ostaa, voit olla yhteydessä meihin
            alla olevan lomakkeen kautta. Yhdistämme teidät oikeaan artesaaniin.{" "}
          </p>
        </div>
        <p>Ota meihin yhteyttä:</p>
        <p>
          Emilia Vuorenmaa:{" "}
          <a href="mailto:emivuore@gmail.com">emivuore@gmail.com</a>
        </p>
        <p>
          Laura Järventie:{" "}
          <a href="mailto:laurajarventie@hotmail.com">
            laurajarventie@hotmail.com
          </a>
        </p>
        <p>
          Salla Vuorikko:{" "}
          <a href="mailto:salla.vuorikko@gmail.com">salla.vuorikko@gmail.com</a>
        </p>
        <p>
          Akseli Miettinen:{" "}
          <a href="mailto:miettinen.akseli@gmail.com">
            miettinen.akseli@gmail.com
          </a>
        </p>
      </div>

      <div>
        <Form
          method="POST"
          action="//public.bc.fi/s2100140/form/contact.php"
          className="form"
          id="form"
        >
          <Form.Group>
            <Form.Label htmlFor="">Sähköposti:</Form.Label>
            <Form.Control
              type="email"
              width="10px"
              name="email"
              id="email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Aihe:</Form.Label>
            <Form.Control
              width="10px"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Viesti:</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              name="message"
              id="message"
              required
            />
            <Button type="submit" className="addbtn" value="Send data">
              Lähetä viesti
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default About;
