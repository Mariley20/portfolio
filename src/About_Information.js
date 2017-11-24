import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/app.css';
export const InformationMe = () => {
    return(
        <div className='aboutme'>
            <h2 className='title'>Hola Soy Mariley Erika</h2>
            <h3 className='title'>Gracias por Encontrarme</h3>
            <p className='paragraph'>
                Soy Desarrolladora FronEnd Jr, tambien estudie Ingenieria de Sistemas.
            </p>
            <p className='paragraph' >
                Me apasiona lo digital y tecnológico en todas sus formas, conjuro mis habilidades 
                de programar y creatividad para crear sitios web limpios, profesionales y funcionales
                de calidad que sean escalables y accesibles.
            </p>
            <p className='paragraph'>     
                Soy especialista en la integración de tecnologías web como HTML, CSS, JavaScript, 
                React Redux, diferentes API’s, frameworks y librerias etc.
                Enfocada en el desarrollo de single-page application, Responsive Web Design y 
                UX (user experience), estoy constantemente aprendiendo tecnologías web y otros 
                temas relacionados con tecnologías BackEnd y DataBase.
            </p>
            <p className='paragraph'>
                Me agrada el trabajo en equipo con la metodología ágil, como individualmente, manteniendo la calma 
                ante situaciones bajo presión y manejo del estrés.
            </p>
        </div>
    )
}
export const invitation = () => {
    return (
        <div>
        <h2>Realmente soy yo</h2>
        <p>"Aquellos que están lo suficientemente locos como para creer que pueden cambiar el mundo,
            son quienes lo cambian".</p>
            <h3>Steve Jobs </h3>
        </div>
    )
}