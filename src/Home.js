import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/app.css';
// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div className="home-page text-center">
       <div className="row">
            <div className="col-md-offset-3 col-sm-offset-3 col-sm-2 col-lg-2 remove-left remove-right">
                <NavBar />
            </div>
            <div className="col-md-5 col-sm-5 col-lg-5 remove-left">
            <Information />
            </div>
        </div>
    </div>
)
}
export const Information = () => {
    return (
        <div className="col-md-12 col-sm-12 col-lg-12 information">
                <p className='paragraph'>Hola!! </p>
                <p> Soy </p>
                <h1 className='title'>Mariley Erika</h1>
                <h2 className='title'>Condori Calla</h2>
                <p className='paragraph'>Frent End Developer/ Ingenieria de Sistemas</p>
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
                <p>Si lo puedes imaginar, lo puedo programar</p>
                <h3>Gracias por encontrarme</h3>
                <button>Descagar CV</button>sw
            </div>
    )
}
export const NavBar = () => {
    return (
        <div className="col-md-12 col-sm-12 col-lg-12 nav-bar text-center">
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
                <NavLink to="/habilities" className="list-group-item">
                      <h3>Habilities</h3>
                    <span>
                        <i className="fa fa-magic " aria-hidden="true"></i>
                    </span>
                </NavLink>
                <NavLink to="/contact" className="list-group-item">
                      <h3>Contact</h3>
                    <span>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </NavLink>
        </div>
    )
}