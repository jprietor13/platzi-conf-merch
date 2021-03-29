import React from 'react';
import '../assets/styles/containers/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="Success-content">
        <h2>Juan, Gracias por tu compra</h2>
        <span>Tu pedido llegara en 3 dias a tu direccin</span>
        <div className="Success-map">
          Google maps
        </div>
      </div>
    </div>
  );
};

export default Success;