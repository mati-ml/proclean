import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo1.png';
import styled from 'styled-components';

// Define los estilos para la barra de navegación
const CustomNavbar = styled(Navbar)`
    font-family: 'Open Sans', sans-serif;
    padding-left: 0; /* Elimina el relleno izquierdo del contenedor */

    .navbar-nav {
        margin-left: auto; /* Alinea los enlaces a la izquierda */
    }

    .nav-link {
        color: #053a80; /* Color de texto azul para los enlaces */
        font-size: 1rem; /* Tamaño de fuente base ajustado */
        margin-right: 1rem; /* Espaciado entre enlaces */

        &:hover {
            color: #0e91c8; /* Color de texto celeste para el enlace en hover */
        }
    }

    .nav-link.active {
        color: lightblue; /* Color de texto celeste para el enlace activo */
    }

    /* Ajustes responsivos */
    @media (max-width: 768px) {
        .nav-link {
            font-size: 0.9rem; /* Tamaño de fuente más pequeño en pantallas pequeñas */
            margin-right: 0.5rem; /* Menos espaciado en pantallas pequeñas */
        }
    }

    @media (max-width: 576px) {
        .nav-link {
            font-size: 0.77rem; /* Tamaño de fuente aún más pequeño en pantallas muy pequeñas */
            margin-right: 0.25rem; /* Aún menos espaciado en pantallas muy pequeñas */
        }
    }
`;

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2rem; /* Separación entre el logo y los enlaces */
`;

function NavBar() {
    return (
        <CustomNavbar bg="white" expand="lg" data-bs-theme="white">
            <Container fluid className="d-flex align-items-center px-0">
                {/* Imagen y texto alineados a la izquierda */}
                <LogoWrapper>
                    <img
                        src={logo}
                        alt="ProClean Logo"
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </LogoWrapper>
                {/* Enlaces de navegación alineados a la izquierda */}
                <Nav className="d-flex flex-row flex-wrap align-items-center ml-3">
                    <Nav.Link href="#home" className="mx-2">Inicio</Nav.Link>
                    <Nav.Link href="#about" className="mx-2">Quienes Somos</Nav.Link>
                    <Nav.Link href="#services" className="mx-2">Servicios</Nav.Link>
                    <Nav.Link href="#contact" className="mx-2">Contacto</Nav.Link>
                </Nav>
            </Container>
        </CustomNavbar>
    );
}

export default NavBar;




