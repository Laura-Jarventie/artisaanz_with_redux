import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";

import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "../App.css";

const EditProduct = () => {
  const [data, setData] = useState({
    nimi: "",
    kuvaus: "",
    hinta: "",
    artesaani: "",
    kategoria: "",
  });
  const [tuotteet, setTuotteet] = useState();
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverTitle, setPopOverTitle] = useState();
  const [popOverMessage, setPopOverMessage] = useState();
  const successMessage = "Tekemäsi muutokset tallennettiin onnistuneesti.";
  const errorMessage =
    "Muutoksia ei voitu tallentaa. Tarkista, että et käyttänyt erikoismerkkejä.";
  let { id } = useParams();
  const history = useHistory();
  const target = useRef(null);

  useEffect(() => {
    if (!tuotteet) {
      axios
        .get("https://artisaanz.herokuapp.com/product/find/" + id)
        .then((res) => setTuotteet(res.data));
    }
  });
  let tuoteData = undefined;

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const editData = (e) => {
    e.preventDefault();
    if (data.nimi !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/editnimi/" +
            id +
            "/" +
            data.nimi
        )
        .then(setPopOverTitle("Tuote päivitetty"))
        .then(setPopOverMessage(successMessage))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage(errorMessage);
        });
      setShowPopOver(true);
    }
    if (data.kuvaus !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/editkuvaus/" +
            id +
            "/" +
            data.kuvaus
        )
        .then(setPopOverTitle("Tuote päivitetty"))
        .then(setPopOverMessage(successMessage))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage(errorMessage);
        });
      setShowPopOver(true);
    }
    if (data.hinta !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/edithinta/" +
            id +
            "/" +
            data.hinta
        )
        .then(setPopOverTitle("Tuote päivitetty"))
        .then(setPopOverMessage(successMessage))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage(errorMessage);
        });
      setShowPopOver(true);
    }
    if (data.artesaani !== "") {
      axios
        .post(
          "https://artisaanz.herokuapp.com/product/editartesaani/" +
            id +
            "/" +
            data.artesaani
        )
        .then(setPopOverTitle("Tuote päivitetty"))
        .then(setPopOverMessage(successMessage))
        .catch((error) => {
          setPopOverTitle("Virhe");
          setPopOverMessage(errorMessage);
        });
      setShowPopOver(true);
    }
    if (data.kategoria !== "") {
      axios.post(
        "https://artisaanz.herokuapp.com/product/editkategoria/" +
          id +
          "/" +
          data.kategoria
      );
    }
    if (
      data.nimi === "" &&
      data.kuvaus === "" &&
      data.hinta === "" &&
      data.kategoria === "" &&
      data.artesaani === ""
    );
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{popOverTitle}</Popover.Title>
      <Popover.Content>{popOverMessage}</Popover.Content>
    </Popover>
  );

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        <h3>{tuotteet.nimi}</h3>
        <Form onSubmit={editData} className="form">
          <Form.Group>
            <Form.Label htmlFor="">Tuotteen nimi:</Form.Label>
            <Form.Control
              type="text"
              width="10px"
              name="nimi"
              maxLength="20"
              placeholder={tuotteet.nimi}
              onChange={changeData}
            />
          </Form.Group>
          <br></br>
          <select name="kategoria" onChange={changeData} required>
            <option value="noValue">Valitse Kategoria:</option>
            <option value="Pussukat">Pussukat</option>
            <option value="Laukut">Laukut</option>
            <option value="Leivonnaiset">Leivonnaiset</option>
            <option value="Villasukat">Villasukat</option>
            <option value="Korut">Korut</option>
            <option value="Sisustus">Sisustus</option>
            <option value="Kalastus">Kalastus</option>
            <option value="Muu">Muu</option>
          </select>
          <div>
            <h1> </h1>
          </div>
          <Form.Group>
            <Form.Label htmlFor="">Tuotteen kuvaus:</Form.Label>
            <Form.Control
              as="textarea"
              maxLength="255"
              rows={3}
              type="text"
              name="kuvaus"
              placeholder={tuotteet.kuvaus}
              onChange={changeData}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="">Hinta:</Form.Label>
            <Form.Control
              type="number"
              name="hinta"
              min="1"
              max="999"
              placeholder={tuotteet.hinta}
              onChange={changeData}
            />
          </Form.Group>
          <button
            type="submit"
            className="addbtn"
            value="Send data"
            ref={target}
          >
            Päivitä tuote
          </button>
          <Overlay target={target.current} placement="left" show={showPopOver}>
            {popover}
          </Overlay>
          <button className="addbtn" onClick={() => history.goBack()}>
            Takaisin
          </button>
        </Form>
      </div>
    );
  }

  return <Container>{tuoteData}</Container>;
};

export default EditProduct;
