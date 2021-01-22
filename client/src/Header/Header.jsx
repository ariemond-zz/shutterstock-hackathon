import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";
import { AiOutlinePicture } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";

export default function Header() {
  return (
    <div className="Header">
      <Navbar />
      <div className="Header__image">
        <div className="Header__searchbar">
          <div className="Header__searchDrop">
            <AiOutlinePicture className="Header__searchPicture" />
            <p className="Header__dropText">All Images</p>
            <GoTriangleDown className="Header__searchDown" />
          </div>
          <input className="Header__search" />
        </div>
      </div>
    </div>
  );
}
