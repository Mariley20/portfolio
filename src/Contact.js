import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    Col,
    Checkbox
} from 'react-bootstrap';

// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './css/app.css';
// import { evaluateAddCard, addCard } from './actions';
export const Contact = ({NavBar, Information}) => {
return (
<div className="row">
< div className = "col-sm-2 col-lg-2 remove-left remove-right" >
        <NavBar />
    </div>
    <div className="col-sm-4 col-lg-4  remove-left">
        <Information />
    </div> 
    <div className="col-sm-6 col-lg-6 row">
        <ContactMe />
        <div className="col-sm-8 col-lg-8">
            <FormContact />
        </div>
    </div>
</div>)
}
const ContactMe = () =>{
    return(
        <div className="col-sm-4 col-lg-4 text-center contact-me">
            < div className = "line-vertical" > </div>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-map-marker fa-stack-1x"></i>
            </span>
            <p>Arequipa, Peru</p>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-mobile fa-stack-1x"></i>
            </span>
           <p> +51 910 946 010</p>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-envelope-o  fa-stack-1x"></i>
            </span>
            <p>mariley2018@gmail.com</p>
        </div>
    )
}
const FormContact = () => {
    return(
        <div>
            <form className="form-group form-input">
                <div className="line-vertical"></div>
                <div className="input-group">
                    <input className="input-text" type="text" placeholder="Full Name" />
                    <span ></span>
                </div>

                <div className="input-group">
                    <input type="email" className="input-text" placeholder="Your Email" />
                </div>
                <div className="input-group">
                    <input type="tel" className="input-text" placeholder="your Phone" />
                </div>
                <div className="input-group">
                    <textarea className="input-text" placeholder="your message"></textarea>
                </div>
                <a href='mailto:mariley2018@gmail.com' className="btn btn-primary" type="submit">Send Message</a>
            </form>
        </div>
    )
}