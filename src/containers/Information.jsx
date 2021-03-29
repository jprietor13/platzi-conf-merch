import React from 'react';
import '../assets/styles/containers/Information.css';

const Information = () => {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
          <div className="Information-form">
            <form action="">
              <input type="text" placeholder="Nombre completo" name="name" />
              <input type="email" placeholder="Corre electrónico" name="email" />
              <input type="text" placeholder="Dirección" name="address" />
              <input type="text" placeholder="Apto" name="apto" />
              <input type="text" placeholder="Ciudad" name="city" />
              <input type="text" placeholder="Pais" name="country" />
              <input type="text" placeholder="Departamento" name="state" />
              <input type="text" placeholder="Código postal" name="cp" />
              <input type="text" placeholder="Telefono" name="phone" />
            </form>
          </div>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
            Pagar
          </div>
        </div>
      </div>
      <div className="Information-pedido">
        <h3>Pedido: </h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;