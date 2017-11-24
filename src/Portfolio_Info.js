import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Thumbnail} from 'react-bootstrap';
import './css/app.css';
import {selectionWork} from './actions';

export const Selection = () => {
    return (
        <div>
            <p>buscar</p>
            <ul inline>
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
export const Content = ({work}) => {
    return (
        <div className='portfolio'>
        <Selection />
        <div className='flex-container'>
           {work.map((item, index) => {
               return <Work key={index} item={item} index={index}/>
           })}
        </div>
        </div>
    )
}
const Work = ({item, index}) => {
return (
    <div className='item-work'>

         <img src={item.img} />
        <h3>{item.name}</h3>
        <NavLink to='/viewWork' onClick={() => selectionWork(index)}>Ver más...</NavLink>
    </div>
    )

}