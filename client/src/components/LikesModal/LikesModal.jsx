import React, { Component } from 'react';
import Modal from 'react-modal';
import '../LikesModal/likesmodal.scss';
import closeButton from '../../assets/icons/close-24px.svg';
import { Link, NavLink } from 'react-router-dom';
import Street1 from '../../assets/images/street4.jpg';
import Street2 from '../../assets/images/image11.jpg';
import Street3 from '../../assets/images/artist3.jpg';
import Street4 from '../../assets/images/wolfgang3.jpg';
import Street5 from '../../assets/images/street2.jpg';
import Street6 from '../../assets/images/image12.jpg';
import User from '../../assets/images/user.jpg';

export default class LikesModal extends Component {


    render() {
        return (
            <div className="likes-modal">
            <div className="likes-modal__top">
            <img src={User} alt="" className="likes-modal__icon"/>
            <h1 className="likes-modal__header">You Might Like These</h1>
            </div>
                <img onClick={this.props.closeModal} className="likes-modal__closeButton" src={closeButton} alt=""/>
                <div className="likes-modal__images">
                    <img src={Street1} alt="" className="likes-modal__image"/>
                    <img src={Street2} alt="" className="likes-modal__image"/>
                    <img src={Street3} alt="" className="likes-modal__image"/>
                    <img src={Street4} alt="" className="likes-modal__image"/>
                    <img src={Street5} alt="" className="likes-modal__image"/>
                    <img src={Street6} alt="" className="likes-modal__image"/>
                </div>
            </div>
        )
    }
}


