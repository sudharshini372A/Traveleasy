import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import { ClipLoader } from 'react-spinners'; // Fallback spinner
import animationData from './Animation.json'; // Path to your Lottie JSON file

const TravelLoading = () => {
 

  const lottieOptions = {
    loop: true,
    autoplay: true, // Auto start the animation
    animationData: animationData, // Your downloaded animation
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="travel-loading-container">
        <Lottie options={lottieOptions} height={300} width={300} eventListeners={[{ eventName: 'complete'}]} />
        <h2 className='text-light text-center fw-bold fs-3'>Explore Travel Make Easy <br /><span className='fs-2'>With Us</span></h2>
     
    </div>
  );
};

export default TravelLoading;
