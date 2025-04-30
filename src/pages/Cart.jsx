import { useCart } from "../context/CartContext";

const Cart = () => {
  console.log("From the cart: Shows current cart");
  const { cart, dispatch } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className="mb-2 border-b pb-2 flex justify-between">
          <div>
            <h3 className="font-bold">(item.title)</h3>
            <p>Qty: {item.quantity}</p>
          </div>
          <div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button
              onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
              className="text-red-500 text-sm"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4 font-bold text-xl">Total: ${total.toFixed(2)}</div>
    </div>
  );
};
export default Cart;
