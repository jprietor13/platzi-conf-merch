import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/containers/Information.css';

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);
  const { form } = useRef(null); //para hacer referencia al formulario
  const { cart } = state;

  const handleSubmit = () => {
    let formData = new FormData(form.current); //para leer la info de cada input
    const buyer = { //comprador
      'name': formData.get('name'),
      'email': formData.get('email'),
      'address': formData.get('address'),
      'apto': formData.get('apto'),
      'city': formData.get('city'),
      'country': formData.get('country'),
      'state': formData.get('state'),
      'cp': formData.get('cp'),
      'phone': formData.get('phone'),
    }
    addToBuyer(buyer); //pasamos la data que obtiene formdata mediante buyer
  }

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
          <div className="Information-form">
            <form ref={form}>
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
            <Link to="/checkout">
              Regresar
            </Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-pedido">
        <h3>Pedido: </h3>
        {cart.map(item =>
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Information;