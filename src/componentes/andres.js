import React from 'react';
import './andres.css';
import AndresImage from '../images/Andres.jpg';
const Andres = () => {
    return (
        <div className="andres-container">
            <h1>¡Hola, soy Andrés! 🐘</h1>
            <img
                src={AndresImage}
                alt="Andrés"
                className="andres-image"
            />
            <p>
                Mi lenguaje favorito es <strong>C++</strong>. <br />
                La gente dice que tengo muchas capas... <br />
                ¡Pero eso es solo porque manejo tantas clases!
            </p>
        </div>
    );
};

export default Andres;
