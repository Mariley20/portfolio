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
export const Contact = ({NavBar}) => {
return (
<div className="row">
        <NavBar />
    <div className="col-sm-6">
        <FormContact />
    </div>
</div>)
}
const FormContact = () => {
    return(
        <div>
            <form className="form-group">
                <div>
                    <input className="input-text" type="text" placeholder="Full Name" />
                    <span ></span>
                </div>
                <div>
                    <input type="email" placeholder="Your Email" />
                </div>
                <div>
                    <input type="tel" placeholder="your Phone" />
                </div>
                <div>
                    <textarea placeholder="your message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}