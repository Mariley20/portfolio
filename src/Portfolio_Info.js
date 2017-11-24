import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Thumbnail} from 'react-bootstrap';
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
export const content = ({work}) => {
    return (
        <div className='portfolio'>
           <ul className='inlinie-block'>
           {work.map((item, index) => {
               return <Work key={index} item={item} index={index}/>
           })}
            </ul>
        </div>
    )
}
const Work = ({item, index}) => {
return (
    <li className='item-work'>
         <Thumbnail src={item.img} alt="242x200">
          <h3>{item.name}</h3>
          <NavLink to='/viewWork' onClick={() => selectionWork(index)}>Ver más...</NavLink>
        </Thumbnail>
         </li>
    )

}