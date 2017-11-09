import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './css/app.css';
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div className="home-page text-center">
       <div className="row">
            <div className=" col-md-offset-3 col-sm-2 nav-bar">
                <div className="list-group-item" >
                    <h3>Home</h3>
                    <span>
                        <i class="fa fa-home" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="list-group-item" >
                    <h3>About</h3>
                    <span>
                        <i class="fa fa-user-o" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="list-group-item" >
                    <h3>Portfolio</h3>
                    <span>
                        <i class="fa fa-briefcase" aria-hidden="true"></i>
                    </span>
                </div>
                <div className="list-group-item" >
                      <h3>Contact</h3>
                    <span>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </span>  
                </div>
            </div>
            <div className="col-sm-5 information">
                <h1>Mariley Erika</h1>
                <h2>Condori Calla</h2>
                <p>Frent End Developer/ Ingenieria de Sistemas</p>
                <div>
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github-alt fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-github-alt  fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="fa-stack fa-lg">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-facebook  fa-stack-1x fa-inverse"></i>
                    </span>   
                </div>
            </div>
        </div>
    </div>
)
}