import React from 'react';
import './ricardo.css';
import RicardoImage from '../images/Ricardo.jpg';
const Ricardo = () => {
    return (
        <div className="ricardo-container">
            <h1>¡Hola, soy Ricardo! 🦜</h1>
            <img
                src={RicardoImage}
                alt="Ricardo"
                className="ricardo-image"
            />
            <p>
                Mi lenguaje favorito es <strong>Java</strong>. <br />
                Siempre digo que tengo una relación fuerte con mis objetos... <br />
                ¡Pero a veces solo son instancias pasajeras! 😅
            </p>
        </div>
    );
};

export default Ricardo;
