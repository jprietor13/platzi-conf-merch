import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);


  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [state.cart, payload]//posicion de initial state, trae lo que tiene card y agreguele lo que tiene payload
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items =>
        items.id !== payload.id //regresa los items que su id sea diferente al que elimine
      )
    })
  }

  return { addToCart, removeFromCart, state }
}

export default useInitialState;