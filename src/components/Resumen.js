import React from 'react';
import {primerMayuscula} from '../helpers';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorResumen = styled.div`
    padding: 1rem; /** Distancia de la letra con la caja */
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem; /** Distancia de la caja con otra */
`;

const Resumen = ({datos}) => {

    // Extraer datos
    const {marca,year,plan} = datos; 

    // Validacion para ocultar resumen si los campos estan vacios
    if(marca==='' || year ==='' || plan===''){ return null };  

    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>

            <ul>
                <li>Marca: { primerMayuscula(marca) } </li>
                <li>Plan: { primerMayuscula(plan) } </li>
                <li>Año del auto: {year} </li>
            </ul>
        </ContenedorResumen>
     );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
  }
  
export default Resumen;


