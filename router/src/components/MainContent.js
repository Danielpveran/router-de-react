import React from 'react';
import DalliatLogo from './img/DalliatLogo.jpg';
import './MainContent.css';

const MainContent = () => {
    const items = [
        'Implementación de React Router',
        'Componentes Header y Footer',
        'Diseño responsive',
        'Integración de estilos CSS',
        'Gestión de estado con React'
    ];

    return (
        <main className="main-content">
            <div className="content-container">
                <img 
                    src={DalliatLogo} 
                    alt="Imagen del Proyecto Integrador" 
                    className="project-image"
                />
                <div className="text-content">
                    <h2>Dalliat</h2>
                    <p className="project-description">
                        Este proyecto es una opcion para empresarios los cuales necesitaban ser capaces de
                         mostrarse competentemente contra las grandes corporaciones.
                    </p>
                    <h3>Características del Proyecto:</h3>
                    <ul className="features-list">
                        {items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
};

export default MainContent;
