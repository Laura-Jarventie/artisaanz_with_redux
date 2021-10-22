import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import "../App.css";

const Navigation = () => {
  const cart = useSelector((state) => state.cart);
  let count = cart.length;

  //   const [user, setUser] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://artisaanz.herokuapp.com/seller/all")
  //       .then((resp) => setUser(resp.data));
  //   }, []);

  //   const userList = user.map((user) => {
  //     return (
  //       <Dropdown.Item>
  //         <Link
  //           to={{
  //             pathname: "/login",
  //             state: { seller: user.id },
  //           }}
  //         >
  //           {user.nimi}
  //         </Link>
  //       </Dropdown.Item>
  //     );
  //   });

  return (
    <nav>
      <ul>
        <li>
          <Link to="/kotisivu"> Kotisivu </Link>
        </li>
        <li>
          <Link to="/tuotteet"> Tuotteet </Link>
        </li>
        <li>
          <Link to="/artesaanit"> Artesaanit </Link>
        </li>
        <li>
          <Link to="/meistä"> Meistä</Link>
        </li>
        <li>
          <Link to="/uusiMyyjä"> Uusi myyjä</Link>
        </li>
        <li>
          <Link to="/ostoskori"> Ostoskori ({count})</Link>
        </li>
        <li>
          {/* <Dropdown>
            <DropdownButton alignRight title="Valitse myyjä">
              {userList}
            </DropdownButton>
          </Dropdown> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
