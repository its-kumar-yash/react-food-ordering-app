import CartContext from "./cart-context";

const CartProvider = (props) => {
  const adItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: adItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
