import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Content} from './Portfolio_Info'
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './css/app.css';
// import { evaluateAddCard, addCard } from './actions';
export const Portfolio = ({NavBar, Information, work}) => {
return (
    <div className="row">
        <div className="col-sm-2 col-lg-2 remove-left remove-right">
                <NavBar />
        </div>
        <div className="col-md-3 col-sm-3 col-lg-3 remove-left">
           <Information />
        </div>
        <div className="col-md-7">
        <Content work={work} />
        </div>
    </div>)
}