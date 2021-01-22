import React, { Component } from 'react';
import Modal from 'react-modal';
import '../CuratedModal/curatedmodal.scss';
import closeButton from '../../assets/icons/close-24px.svg';
import { Link, NavLink } from 'react-router-dom';
import Street1 from '../../assets/images/street1.jpg';
import Street2 from '../../assets/images/street2.jpg';
import Street3 from '../../assets/images/street3.jpg';
import Street4 from '../../assets/images/street4.jpg';
import Street5 from '../../assets/images/street5.jpg';
import Street6 from '../../assets/images/street6.jpg';
import MainStreet from '../../assets/images/image1.jpg';

export default class CuratedModal extends Component {


    render() {
        return (
            <div className="modal">
            <div className="artist-modal__top">
            <img src={MainStreet} alt="" className="modal__icon"/>
            <h1 className="artist-modal__header">Street Art</h1>
            </div>
                <img onClick={this.props.closeModal} className="modal__closeButton" src={closeButton} alt=""/>
                <div className="modal__images">
                    <img src={Street1} alt="" className="modal__image"/>
                    <img src={Street2} alt="" className="modal__image"/>
                    <img src={Street3} alt="" className="modal__image"/>
                    <img src={Street4} alt="" className="modal__image"/>
                    <img src={Street5} alt="" className="modal__image"/>
                    <img src={Street6} alt="" className="modal__image"/>
                </div>
            </div>
        )
    }
}


