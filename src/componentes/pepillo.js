import React from 'react';
import './pepillo.css';
import PepilloImage from '../images/Pepillo.jpg';
const Pepillo = () => {
    return (
        <div className="pepillo-container">
            <h1>¡Hola, soy Pepillo! 🐅</h1>
            <img
                src={PepilloImage}
                alt="Pepillo"
                className="pepillo-image"
            />
            <p>
                Mi lenguaje favorito es <strong>JavaScript</strong>. <br />
                Me encanta hacer cosas dinámicas, pero a veces me siento como un <strong>"undefined"</strong> en una conversación. ¡No sé qué decir!
            </p>
        </div>
    );
};

export default Pepillo;
