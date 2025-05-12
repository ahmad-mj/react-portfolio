import { useCart } from "../context/CartContext";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const [confirmOpen, setConfirmOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty 😢</div>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="mb-4 border-b pb-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.images?.[0] || item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>

                {/* Quantity controls: -, count, + */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREMENT", payload: item.id })
                    }
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-white"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREMENT", payload: item.id })
                    }
                    className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <div className="text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <button
            onClick={() => setConfirmOpen(true)}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Clear Cart
          </button>
        </div>
      )}

      <ConfirmDialog
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => dispatch({ type: "CLEAR" })}
        message="Are you sure you want to clear your cart?"
      />
    </div>
  );
};

export default Cart;
