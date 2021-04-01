const gethandleSumTotal = (cart) => {
  const sum = (counter, currentValue) => counter + currentValue.price;
  const total = cart.reduce(sum, 0);
  return total;
}

export default gethandleSumTotal;