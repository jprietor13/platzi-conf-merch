import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import getHandleSumTotal from '../utils/getHandleSumTotal';
import '../assets/styles/containers/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const handleSumTotal = getHandleSumTotal(cart);
  const history = useHistory();

  const paypalOptions = {
    clientId: 'AcHmyNgmIXyPUNJONvY6F8ZZufyJF_j__nLCXiRYvHWDrNdUIq0JkMx3-p3hpdP7RvGRAt8kGdpDOzio',
    intent: 'capture',
    currency: 'USD'
  }

  const handlePaymentSuccess = data => {
    console.log(data)
    if (data.status === "COMPLETED") {
      const newOrder = {
        buyer,
        products: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map(item =>
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        )}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal}
            onPaymentStart={() => console.log("Start payment")}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div>
        Sidebar
      </div>
    </div>
  );
};

export default Payment;