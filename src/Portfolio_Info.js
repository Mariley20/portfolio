import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Thumbnail} from 'react-bootstrap';
import './css/app.css';
import {selectionWork} from './actions';

export const Selection = () => {
    return (
        <div>
            <div className="input-group">
                    <input type="tel" className="input-text" placeholder="Buscar" />
                </div>
            <ul className='nav nav-pills  flex-container'>
                <li className='list-item'>HTML CSS</li>
                <li className='list-item' >HTML Bootstrap</li>
                <li className='list-item' >HTML CSS jQuery</li>
                <li className='list-item' >Reactjs Router</li>
                <li className='list-item' >Reactjs Router Redux</li>
                <li className='list-item' >Api Google</li>
                <li className='list-item' >Firebase</li>
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