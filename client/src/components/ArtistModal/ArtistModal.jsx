import React, { Component } from 'react';
import Modal from 'react-modal';
import '../CuratedModal/curatedmodal.scss';
import closeButton from '../../assets/icons/close-24px.svg';
import { Link, NavLink } from 'react-router-dom';
import Wolf1 from '../../assets/images/wolfgang1.jpg';
import Wolf2 from '../../assets/images/wolfgang2.jpg';
import Wolf3 from '../../assets/images/wolfgang3.jpg';
import Wolf4 from '../../assets/images/wolfgang4.jpg';
import Wolf5 from '../../assets/images/wolfgang5.jpg';
import Wolf6 from '../../assets/images/wolfgang6.jpg';


export default class CuratedModal extends Component {


    render() {
        return (
            <div className="modal">
                <h1 className="modal__header">Thomas Couillard</h1>
                <img onClick={this.props.closeModal} className="modal__closeButton" src={closeButton} alt=""/>
                <div className="modal__images">
                    <img src={Wolf1} alt="" className="modal__image"/>
                    <img src={Wolf2} alt="" className="modal__image"/>
                    <img src={Wolf3} alt="" className="modal__image"/>
                    <img src={Wolf4} alt="" className="modal__image"/>
                    <img src={Wolf5} alt="" className="modal__image"/>
                    <img src={Wolf6} alt="" className="modal__image"/>
                </div>
            </div>
        )
    }
}


