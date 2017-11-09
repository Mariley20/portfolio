import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    BrowserRouter,
    NavLink,
    Route,
    Switch} from 'react-router-dom';
// import './styles/App.css';
import {Home} from './Home';
import {About} from 'About';
import {Portfolio} from './Portfolio';
import {Resume} from './Resume';
const App = ({myBoard, selected}) => {
return (
     <div className="container-fluid">
        <BrowserRouter>
            <Switch>
                    <Route exact path="/" render={() => <Home myBoard={myBoard} selected={selected} />}/>
                    <Route path="/about" render={() => <About myBoard={myBoard} selected={selected} />}/>
                    <Route path="/portfolio"  render={() => <Portfolio myBoard={myBoard} selected={selected} />}/>
                    <Route path="/contact"  render={() => <Contact myBoard={myBoard} selected={selected} />}/>
                    <Route path="/resume"  render={() => <Resume myBoard={myBoard} selected={selected} />}/>
            </Switch>
        </BrowserRouter>
    </div>
)
}
const mapToProps = ({myBoard, selected}) => ({myBoard, selected});

export default connect(mapToProps)(App);