import React from 'react';
import '../css/footer.css';
import efx from '../assets/efx-logo.png'

export default function Footer () {
    return (
        
        <React.Fragment>
            <footer>
            <img className='efx' src={efx} alt="efx" /><br/>
            <br/>
            <div>
            <p className='pFooter'>Copyright 2021 Equifax Inc. Todos los derechos reservados</p>
            <p className='pFooter'>Equifax y las marcas de Equifax utilizadas en este documento son marcas comerciales de Equifax inc. <br/> Otros nombres de Productos y compañías mencionados aquí son propiedad de sus respectivos dueños</p>   
            </div>   
            </footer>      
        </React.Fragment>
    )
}
