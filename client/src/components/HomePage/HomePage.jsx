import React from "react";
import axios from "axios";
import '../CuratedCollection/curatedcollection.scss';
import CuratedCollection from '../CuratedCollection/CuratedCollection';
import Footer from '../Footer/Footer';


  class HomePage extends React.Component {


  render() {
    return (
      <section>
        <CuratedCollection/>
        <Footer/>
      </section>
      );
    }
}
export default HomePage;