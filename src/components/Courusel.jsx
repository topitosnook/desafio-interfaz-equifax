import React from 'react';
import banner1 from '../assets/banner1.jpg';
import '../css/courusel.css'

export default function Courusel() {
    return (
        <React.Fragment>
            <div className='banner'>
                <img src={banner1} alt="banner 1" className='banner1' />
               
            </div>

        </React.Fragment>
    )
}
