import React from "react";
import axios from "axios";
import "../FeatureArtist/featureartist.scss";
import Heart from "../../assets/icons/nobgheart.png";
import Image1 from "../../assets/images/artist1.jpg";
import Image2 from "../../assets/images/artist2.jpg";
import Image3 from "../../assets/images/artist3.jpg";
import Image4 from "../../assets/images/artist4.jpg";
import Image5 from "../../assets/images/artist5.jpg";
import Image6 from "../../assets/images/artist6.jpg";

import Modal from "react-modal";
import ArtistModal from "../ArtistModal/ArtistModal";

const SHUTTERSTOCK_API_TOKEN =
  "v2/c0U1WEhNQjNpZmJIN0dHbFA1TGpMNVVSWkd6alBSSWYvMjkyMTc4MzQzL2N1c3RvbWVyLzMvZjRBU0R5NUgzMm8zYWdlUE9tc0lZa1FETmpDTXYxa2N4c0xRRXFraDhDZjk4VlRCR1JKRDZ4a1M5Y1lxbkZNRmI1cTlrRXFtLU9LN3VFUmFINHFHeEhVemE3WXNjMUFhVUgzMW5xRWthLVdidEt4eHRvYTFFTXZ3aExqclIydUwyMjJSWk50bVB4eUdyaEI1QnRwYTlqNXVmSTdwdjZDcUYwdFlLN0JNaDBmelRaM2JCWVBHdzZGZmtSRXpHVmlrVUFWc1ZXLVN3Yi1qWHoyNTZaMEZCUQ";

class FeatureArtist extends React.Component {
  state = {
    isOpen: false,
  };

  handleOpenModal = (e) => {
    this.setState({
      isOpen: true,
    });
  };

  handleCloseModal = (e) => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    Modal.setAppElement("body");
    return (
      <section className="feature-artist">
        <h2 className="feature-artist__header">Featured Artists</h2>
        <div className="feature-artist__gallery">
          <div className="feature-artist__list">
            <div
              onClick={this.handleOpenModal}
              className="feature-artist__container"
            >
              <img src={Image1} className="feature-artist__image" alt="" />
              <div className="feature-artist__overlay">Clément Raymond</div>
              <img src={Heart} className="feature-artist__heart" alt=""/>
              </div>
              <div onClick={this.handleOpenModal} className="feature-artist__container">
              <img src={Image2} className="feature-artist__image" alt=""/>
              <div className="feature-artist__overlay">Ryan Stone</div>
              <img src={Heart} className="feature-artist__heart" alt=""/>
              </div>
          </div>

          <div className="feature-artist__list">
                <div onClick={this.handleOpenModal} className="feature-artist__container">
                <img src={Image4} className="feature-artist__image" alt=""/>
                <div className="feature-artist__overlay">Thomas Couillard</div>
                <img src={Heart} className="feature-artist__heart" alt=""/>
                </div>
                <div onClick={this.handleOpenModal} className="feature-artist__container">
                <img src={Image3} className="feature-artist__image" alt=""/>
                <div className="feature-artist__overlay">Laine Cooper</div>
                <img src={Heart} className="feature-artist__heart" alt=""/>
                </div>
          </div>

          <div className="feature-artist__list">
                <div onClick={this.handleOpenModal} className="feature-artist__container">
                <img src={Image5} className="feature-artist__image" alt=""/>
                <div className="feature-artist__overlay">Cameron Venti</div>
                <img src={Heart} className="feature-artist__heart" alt=""/>
                </div>
                <div onClick={this.handleOpenModal} className="feature-artist__container">
                <img src={Image6} className="feature-artist__image" alt=""/>
                <div className="feature-artist__overlay">Julian Cardenas</div>
                <img src={Heart} className="feature-artist__heart" alt=""/>
                </div>
          </div>
        </div>
        <div className="feature-artist__seymour">
          <h2 className="feature-artist__seymour">+ SEE MORE</h2>
        </div>

        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
          style={{
            content: {
              top: "40%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
        >
          <ArtistModal closeModal={this.handleCloseModal} />
        </Modal>
      </section>
    );
  }
}
export default FeatureArtist;
