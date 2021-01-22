import React from "react";
import axios from "axios";
import "../LikeThese/likethis.scss";
import Heart from "../../assets/icons/nobgheart.png";
import Image1 from "../../assets/images/likes1.jpg";
import Image2 from "../../assets/images/likes2.jpg";
import Image3 from "../../assets/images/likes3.jpg";
import User from "../../assets/images/user.jpg";
import Modal from "react-modal";
import LikesModal from "../LikesModal/LikesModal";

const SHUTTERSTOCK_API_TOKEN =
  "v2/c0U1WEhNQjNpZmJIN0dHbFA1TGpMNVVSWkd6alBSSWYvMjkyMTc4MzQzL2N1c3RvbWVyLzMvZjRBU0R5NUgzMm8zYWdlUE9tc0lZa1FETmpDTXYxa2N4c0xRRXFraDhDZjk4VlRCR1JKRDZ4a1M5Y1lxbkZNRmI1cTlrRXFtLU9LN3VFUmFINHFHeEhVemE3WXNjMUFhVUgzMW5xRWthLVdidEt4eHRvYTFFTXZ3aExqclIydUwyMjJSWk50bVB4eUdyaEI1QnRwYTlqNXVmSTdwdjZDcUYwdFlLN0JNaDBmelRaM2JCWVBHdzZGZmtSRXpHVmlrVUFWc1ZXLVN3Yi1qWHoyNTZaMEZCUQ";

class CuratedCollection extends React.Component {
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
      <section className="like">
        <h2 className="like__header">You Might Like These</h2>
        <div className="like__list">
          <div onClick={this.handleOpenModal} className="like__container">
            <img src={Image1} className="like__image" alt="1" />
            <div className="like__overlay">
              <img src={User} alt="" className="like__user" />
            </div>
            <img src={Heart} className="like__heart" alt="" />
          </div>
          <div onClick={this.handleOpenModal} className="like__container">
            <img src={Image2} className="like__image" alt="2" />
            <div className="like__overlay">
              <img src={User} alt="" className="like__user" />
            </div>
            <img src={Heart} className="like__heart" alt="3" />
          </div>
          <div onClick={this.handleOpenModal} className="like__container">
            <img src={Image3} className="like__image" alt="4" />
            <div className="like__overlay">
              <img src={User} alt="" className="like__user" />
            </div>
            <img src={Heart} className="like__heart" alt="5" />
          </div>
        </div>

        <div className="like__seymour">
          <h2 className="like__seymour">+ SEE MORE</h2>
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
          <LikesModal closeModal={this.handleCloseModal} />
        </Modal>
      </section>
    );
  }
}
export default CuratedCollection;
