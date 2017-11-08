import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

// import { evaluateAddCard, addCard } from './actions';
export const Home = () => {
return (
    <div>
        <Row>
            <Col sm={3}>
                <ListGroup className="ListGroup">
                    <ListGroupItem>Home</ListGroupItem>
                    <ListGroupItem>About</ListGroupItem>
                    <ListGroupItem>Portfolio</ListGroupItem>
                    <ListGroupItem>Contact</ListGroupItem>
                </ListGroup>
            </Col>
            <Col sm={5}>
            Homeee
            </Col>
        </Row>
    </div>
)
}