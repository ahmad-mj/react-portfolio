import { useCart } from "../context/CartContext";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="mb-2 border-b pb-2 flex justify-between">
          <div>
            <h3 className="font-bold">{item.title}</h3>
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

      {cart.length > 0 && (
        <button
          onClick={() => setConfirmOpen(true)}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
      )}

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => dispatch({ type: "CLEAR" })}
        message="Are you sure you want to remove all items from your cart?"
      />
    </div>
  );
};

export default Cart;
