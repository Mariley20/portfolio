import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './css/app.css';
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div className="home-page text-center">
       <div className="row">
            <div className=" col-md-offset-3">
                <NavBar />
            </div>
            <div className="col-sm-5 information">
                <h1>Mariley Erika</h1>
                <h2>Condori Calla</h2>
                <p>Frent End Developer/ Ingenieria de Sistemas</p>
                <div>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-github-alt fa-stack-1x fa-inverse"></i>
                    </span>  
                </div>
            </div>
        </div>
    </div>
)
}
export const NavBar = () => {
    return (
        <div className="col-sm-2 nav-bar text-center">
                <NavLink to="/home" className="list-group-item">
                    <h3>Home</h3>
                    <span>
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </span>
                </NavLink>
                <NavLink to="/about" className="list-group-item">
                    <h3>About</h3>
                    <span>
                        <i className="glyphicon glyphicon-user" aria-hidden="true"></i>
                    </span>
                </NavLink>
                <NavLink to="/portfolio" className="list-group-item">
                    <h3>Portfolio</h3>
                    <span>
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </span>
                </NavLink>
                <NavLink to="/contact" className="list-group-item">
                      <h3>Contact</h3>
                    <span>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>
                </NavLink>
        </div>
    )
}