import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Makers = () => {
  const dispatch = useDispatch();
  const makers = useSelector((state) => state.makers);

  return <div><h1>Tänne tulee artesaanit</h1></div>;
};

export default Makers;
