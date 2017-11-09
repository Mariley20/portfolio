import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './index.css';
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div className="home-page text-center">
       <div className="row">
            <div className=" col-md-offset-2 col-sm-2 nav-bar">
                <div className="list-group-item" >Home</div>
                <div className="list-group-item" >About</div>
                <div className="list-group-item" >Portfolio</div>
                <div className="list-group-item" >Contact</div>
            </div>
            <div className="col-sm-5 information">
                <h1>Mariley Erika</h1>
                <h2>Condori Calla</h2>
                <p>Frent End Developer/ Ingenieria de Sistemas</p>
                <div>
                    
                </div>
            </div>
        </div>
    </div>
)
}