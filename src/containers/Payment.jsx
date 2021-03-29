import React from 'react';
import '../assets/styles/containers/Payment.css';

const Payment = () => {
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        <div className="Payment-button">
          Boton de pago con Paypal
        </div>
      </div>
      <div>
        Sidebar
      </div>
    </div>
  );
};

export default Payment;