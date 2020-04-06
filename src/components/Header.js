import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Styled components
const ContenedorHeader = styled.header`
    background-color: #26c6DA;
    padding: 10px; /** Largo de la caja */
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem; /**Tamaño de la letra */
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;   
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
 
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;

