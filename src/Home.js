import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles/App.css';
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div>
       <div className="row">
    <div className="col-sm-3">
        <ul className="list-group">
            <li className="list-group-item">Home</li>
            <li className="list-group-item">About</li>
            <li className="list-group-item">Portfolio</li>
            <li className="list-group-item">Contact</li>
        </ul>
    </div>
    <div className="col-sm-5">Homeee</div>
</div>
    </div>
)
}