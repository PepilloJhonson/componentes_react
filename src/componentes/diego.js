import React from 'react';
import './diego.css';
import DiegoImage from '../images/Diego.jpg';
const Diego = () => {
    return (
        <div className="diego-container">
            <h1>¡Hola, soy Diego! 🦥</h1>
            <img
                src={DiegoImage}
                alt="Diego"
                className="diego-image"
            />
            <p>
                Mi lenguaje favorito es <strong>Python</strong>. <br />
                Siempre busco la forma más sencilla de hacer las cosas... <br />
                ¡Pero mis amigos dicen que soy demasiado <strong>"indentado"</strong> en mis opiniones!
            </p>
        </div>
    );
};

export default Diego;
