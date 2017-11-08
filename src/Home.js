import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './styles/App.css';
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div>
       <div class="row">
    <div class="col-sm-3">
        <ul class="ListGroup list-group">
            <li class="list-group-item">Home</li>
            <li class="list-group-item">About</li>
            <li class="list-group-item">Portfolio</li>
            <li class="list-group-item">Contact</li>
        </ul>
    </div>
    <div class="col-sm-5">Homeee</div>
</div>
    </div>
)
}