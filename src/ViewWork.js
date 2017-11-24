import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export const ViewWork = ({work, selected}) => {
    return(
         <Carousel>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={work[selected].img} />
          <Carousel.Caption>
            <h3>{work[selected].name}</h3>
            <p>{work[selected].description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}