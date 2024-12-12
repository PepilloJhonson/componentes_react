import React from 'react';
import './Helmer.css'; 
import HelmerImage from '../images/helmer.jpg';


const Helmer = () => {
    return (
        <div className="helmer-container">
            <h1>¡Hola, soy Helmer! 🐵</h1>
            <img
                src={HelmerImage}
                alt="Helmer"
                className="helmer-image"
            />
            <p>
                Mi lenguaje favorito es <strong>JavaScript</strong>. <br />
                Me encanta hacer cosas dinámicas, pero a veces me siento como un <strong>"undefined"</strong> en una conversación. ¡No sé qué decir!
            </p>
        </div>
    );
};

export default Helmer;
