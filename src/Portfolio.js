import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './css/app.css';
// import { evaluateAddCard, addCard } from './actions';
export const Portfolio = ({NavBar}) => {
return (
    <div className="row">
            <NavBar />
        <div className="col-sm-6"> Portfolio</div>
    </div>)
}