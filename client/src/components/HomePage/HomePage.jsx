import React from "react";
import axios from "axios";
import "../CuratedCollection/curatedcollection.scss";
import CuratedCollection from "../CuratedCollection/CuratedCollection";
import FeatureArtist from "../FeatureArtist/FeatureArtist";
import Footer from "../Footer/Footer";
import Ads from "../Ads/Ads";

class HomePage extends React.Component {
  render() {
    return (
      <section>
        <Ads />
        <CuratedCollection />
        <FeatureArtist />
        <Footer />
      </section>
    );
  }
}
export default HomePage;
