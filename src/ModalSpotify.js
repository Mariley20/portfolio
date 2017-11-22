import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Tooltip, Overlay} from 'react-bootstrap';
import './css/app.css';
import { closeModal, showModal, toggle } from './actions';
export const ModalSpotify = ({show, sharedProps}) => {
	
//     getInitialState() {
//     return { show: false };
//   }
//     render () {
//          let close = () => this.setState({ show: false });
   
    return (
        <div>
            {show?
            <div>
                <Tooltip placement="top" className="in" id="tooltip-top">
                    <div>
                <div>
                    <label>Conectar a Un Dispositivo</label>
                    <i class="fa fa-question-circle" aria-hidden="true"></i>
                </div>
                <div>
                        <i class="fa fa-laptop" aria-hidden="true"></i>
                        <label>Este Navegador <br/>
                        <i class="fa fa-volume-up" aria-hidden="true"></i>
                        Spotify Connect
                        </label>
                </div>
            </div>
                </Tooltip><br/>
                <button onClick={toggle}>ver</button>
            </div>
                    :
                
                <button onClick={toggle}>ver</button>
                }
        </div>
    );
    // }
}