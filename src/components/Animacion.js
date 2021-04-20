import React from 'react';
import Lottie from 'react-lottie';
import dogAnimation from './Animacion/dog-avatar.json';
import './Animacion/Animacion.css';


const Animacion = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: dogAnimation
    };

    return (

        <div className='animation-container'>
            <Lottie
                options={defaultOptions}
            />

        </div>
    )
};

export default Animacion;