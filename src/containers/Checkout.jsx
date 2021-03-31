import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Checkout.css';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  }

  const handleSumTotal = () => {
    const sum = (counter, currentValue) => counter + currentValue.price;
    const total = cart.reduce(sum, 0);
    return total;
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos</h3>}
        {cart.map(item =>
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        )}
      </div>
      <div className="Checkout-sidebar">
        <h3>{`Precio total: $ ${handleSumTotal()}`}</h3>
        <Link to="/checkout/information">
          <button type="button">Continuar</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;