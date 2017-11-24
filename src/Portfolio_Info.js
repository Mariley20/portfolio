import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import './css/app.css';

export const selection = () => {
    return (
        <div>
            <p>buscar</p>
            <ul className='inline-block'>
                <li>HTML CSS</li>
                <li>HTML Bootstrap</li>
                <li>HTML CSS jQuery</li>
                <li>Reactjs Router</li>
                <li>Reactjs Router Redux</li>
                <li>Api Google</li>
                <li>Firebase</li>
                <li></li>
            </ul>
        </div>
    )
}
export const content = () => {
    return (
        <div className='portfolio'>
           <ul className='inlinie-block'>
            <li className='item-work'></li>
            </ul>
        </div>
    )
}