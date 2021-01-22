import React from "react";
import "./Navbar.scss";
import Shutterstock from "../assets/images/Shutterstock.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { VscTriangleDown } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img className="Navbar__logo" src={Shutterstock} />
      <div className="Navbar__menu">
        <p className="Navbar__menuItem">
          IMAGES
          <VscTriangleDown />
        </p>
        <p className="Navbar__menuItem">
          FOOTAGE <VscTriangleDown />
        </p>
        <p className="Navbar__menuItem">
          MUSIC <VscTriangleDown />
        </p>
        <p className="Navbar__menuItem">
          TEMPLATES <VscTriangleDown />
        </p>
        <p className="Navbar__menuItem">
          EDITORIAL <VscTriangleDown />
        </p>
        <p className="Navbar__menuItem">
          TOOLS <VscTriangleDown />
        </p>
        <p className="Navbar__menuItem">
          BLOG <VscTriangleDown />
        </p>
        <p className="Navbar__menuSideItem">
          ENTERPRISE <VscTriangleDown />
        </p>
      </div>
      <div className="Navbar__account">
        <p className="Navbar__pricing">PRICING</p>
        <AiOutlineHeart className="Navbar__heart" />
        <BsPerson />
      </div>
    </div>
  );
}
