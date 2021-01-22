import React from "react";
import "./Ads.scss";

export default function Ads() {
  return (
    <div className="Ads">
      <h2 className="Ads__header">Get 10 Images for free</h2>
      <div className="Ads__paraBox">
        <p className="Ads__para">
          Try a risk-free trial today and download 10 images - cancel anytime
          within your first month and pay nothing, but still keep your images.
        </p>
        <a href="" className="Ads__link">
          Learn more
        </a>
      </div>
      <button className="Ads__button"> Start your free trial now </button>
    </div>
  );
}
