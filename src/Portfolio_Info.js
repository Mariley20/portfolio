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
const Product = ({item, index}) => {
    return (

        <div className='col-lg-10 col-md-10 col-xs-10 ha-products'>
            <div className="ha-img">
                <img src={item.img}/>
                <NavLink
                    className="ha-arrow"
                    to="/viewproduct"
                    onClick={() => changeSelectedFood(index)}><img className="img-arrow" src="img/arrow-right.png"/></NavLink>
            </div>
            <NavLink to="/viewproduct" onClick={() => changeSelectedFood(index)}>
                <strong>{item.name}</strong>
            </NavLink>

            <span className='ha-price'>
                <span>$</span>
                <span >{(item.price).toFixed(2)}</span>
            </span>
            <button className='ha-btn' onClick={() => addCart(index)}>+ Add to cart</button>

        </div>

    )

}

const FirstView = ({food}) => {
    return (
        <div className="container">
            <div className="ha-ubication">
                {food.map((item, index) => {
                    return <Product key ={index} item={item} index={index}/>
                })
}
            </div>
        </div>
    )
}