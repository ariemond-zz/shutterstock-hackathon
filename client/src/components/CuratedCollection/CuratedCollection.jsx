import React from "react";
import axios from "axios";
import '../CuratedCollection/curatedcollection.scss';
import Heart from '../../assets/icons/nobgheart.png';
import Image1 from '../../assets/images/image1.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image3 from '../../assets/images/image3.jpg';
import Image4 from '../../assets/images/image4.jpg';
import Image5 from '../../assets/images/image5.jpg';
import Image6 from '../../assets/images/image6.jpg';
import Image7 from '../../assets/images/image7.jpg';
import Image8 from '../../assets/images/image8.jpg';
import Image9 from '../../assets/images/image9.jpg';
import Image10 from '../../assets/images/image10.jpg';
import Image11 from '../../assets/images/image11.jpg';
import Image12 from '../../assets/images/image12.jpg';

const SHUTTERSTOCK_API_TOKEN =
  "v2/c0U1WEhNQjNpZmJIN0dHbFA1TGpMNVVSWkd6alBSSWYvMjkyMTc4MzQzL2N1c3RvbWVyLzMvZjRBU0R5NUgzMm8zYWdlUE9tc0lZa1FETmpDTXYxa2N4c0xRRXFraDhDZjk4VlRCR1JKRDZ4a1M5Y1lxbkZNRmI1cTlrRXFtLU9LN3VFUmFINHFHeEhVemE3WXNjMUFhVUgzMW5xRWthLVdidEt4eHRvYTFFTXZ3aExqclIydUwyMjJSWk50bVB4eUdyaEI1QnRwYTlqNXVmSTdwdjZDcUYwdFlLN0JNaDBmelRaM2JCWVBHdzZGZmtSRXpHVmlrVUFWc1ZXLVN3Yi1qWHoyNTZaMEZCUQ";

  class HomePage extends React.Component {
  state = {
    data: [],
    art: [],
    outdoors: []
  };
  
  componentDidMount() {
    axios
      .get("https://api.shutterstock.com/v2/images/search", {
        params: {
          query: "sunset",
          fields: "data(id,assets/preview/url)",
        },
        headers: {
          Authorization: `Bearer ${SHUTTERSTOCK_API_TOKEN}`,
          "User-Agent": "request",
        },
      })
      .then((data) => {
        console.log(data.data.data);
        console.log(JSON.stringify(data.data, null, 2));
        this.setState({
            data: data.data.data
        })
      })
      .catch((error) => {
        console.error(error);
      });

      axios
      .get("https://api.shutterstock.com/v2/images/search", {
        params: {
          query: "art",
          fields: "data(id,assets/preview/url)",
        },
        headers: {
          Authorization: `Bearer ${SHUTTERSTOCK_API_TOKEN}`,
          "User-Agent": "request",
        },
      })
      .then((data) => {
        console.log(data.data.data);
        console.log(JSON.stringify(data.data, null, 2));
        this.setState({
            art: data.data.data
        })
      })
      .catch((error) => {
        console.error(error);
      });

      axios
      .get("https://api.shutterstock.com/v2/images/search", {
        params: {
          query: "outdoors",
          fields: "data(id,assets/preview/url)",
        },
        headers: {
          Authorization: `Bearer ${SHUTTERSTOCK_API_TOKEN}`,
          "User-Agent": "request",
        },
      })
      .then((data) => {
        console.log(data.data.data);
        console.log(JSON.stringify(data.data, null, 2));
        this.setState({
            outdoors: data.data.data
        })
      })
      .catch((error) => {
        console.error(error);
      });

    }

  render() {
    return (
      <section className="curated-collection">
        <h2 className="curated-collection__header">Curated collection</h2>
        <div className="curated-collection__gallery">
          <div className="curated-collection__list">
              <div className="curated-collection__container">
              <img src={Image1} className="curated-collection__image"/>
              <div className="curated-collection__overlay">Street Art</div>
              <img src={Heart} className="curated-collection__heart"/>
              </div>
              <div className="curated-collection__container">
              <img src={Image2} className="curated-collection__image"/>
              <img src={Heart} className="curated-collection__heart"/>
              <div className="curated-collection__overlay">Architecture</div>
              </div>
              <div className="curated-collection__container">
              <img src={Image3} className="curated-collection__image"/>
              <img src={Heart} className="curated-collection__heart"/>
              <div className="curated-collection__overlay">Art</div>
              </div>
              <div className="curated-collection__container">
              <img src={Image4} className="curated-collection__image"/>
              <img src={Heart} className="curated-collection__heart"/>
              <div className="curated-collection__overlay">Graffiti</div>
              </div>
          </div>


          <div className="curated-collection__list">
                <div className="curated-collection__container">
                <img src={Image10} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Street Scenes</div>
                </div>
                <div className="curated-collection__container">
                <img src={Image6} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Outdoors</div>
                </div>
                <div className="curated-collection__container">
                <img src={Image5} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Portraits</div>
                </div>
                <div className="curated-collection__container">
                <img src={Image12} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Outdoors</div>
            </div>
           </div>

          <div className="curated-collection__list">
                <div className="curated-collection__container">
                <img src={Image9} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Buildings</div>
                </div>
                <div className="curated-collection__container">
                <img src={Image11} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Portraits</div>
                </div>
                <div className="curated-collection__container">
                <img src={Image7} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Beach</div>
                </div>
                <div className="curated-collection__container">
                <img src={Image8} className="curated-collection__image"/>
                <img src={Heart} className="curated-collection__heart"/>
                <div className="curated-collection__overlay">Beach Scenes</div>
                </div>
          </div>


          
        </div>
        <div className="curated-collection__seymour">
        <h2 className="curated-collection__seymour">+ SEE MORE</h2>
        </div>
        </section>
        );
      }
    }
    export default HomePage;


    // <div className="curated-collection__list">
    //   {this.state.data.slice(0,4).map(image => <img className="curated-collection__image" src={image.assets.preview.url}></img>)}
    //   <img src={Heart} alt="Heart Icon"/>
    // </div>
    // <div className="curated-collection__list">
    // {this.state.art.slice(0,4).map(image => <img className="curated-collection__image" src={image.assets.preview.url}></img>)}
    // </div>
    // <div className="curated-collection__list">
    // {this.state.outdoors.slice(0,4).map(image => <img className="curated-collection__image" src={image.assets.preview.url}></img>)}
    // </div>