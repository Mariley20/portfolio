import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    BrowserRouter,
    NavLink,
    Route,
    Switch} from 'react-router-dom';
import './App.css';
import {Home} from './Home';
// import {About} from 'About';
// import {Portfolio} from './Portfolio';
// import {Resume} from './Resume';
const App = ({myBoard, selected}) => {
return (
    <div className="container">
        <Header />
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" render={() => <Home myBoard={myBoard} selected={selected} />}/>
                    {/* <Route path="/about" render={() => <About myBoard={myBoard} selected={selected} />}/>
                    <Route path="/portfolio"  render={() => <Portfolio myBoard={myBoard} selected={selected} />}/>
                    <Route path="/contact"  render={() => <Portfolio myBoard={myBoard} selected={selected} />}/>
                    <Route path="/resume"  render={() => <Resume myBoard={myBoard} selected={selected} />}/> */}
            </Switch>
        </BrowserRouter>
    </div>
)
}
const Header = () => {
    return (
        <div>
            <img className="logo" src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" />
        </div>
    )
}
const mapToProps = ({myBoard, selected}) => ({myBoard, selected});

export default connect(mapToProps)(App);