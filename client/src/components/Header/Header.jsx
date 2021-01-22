import React from "react";
import Navbar from "../Navbar/Navbar";

import "./Header.scss";
import { AiOutlinePicture } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCamera } from "react-icons/ai";

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
          <div className="Header__iconBox">
            <FiSearch className="Header__icon" />
          </div>
        </div>
        <div className="Header__SBI">
          <AiOutlineCamera className="Header__SBIIcon" />
          <p className="Header__SearchByImage">Search by image</p>
        </div>
      </div>
    </div>
  );
}
