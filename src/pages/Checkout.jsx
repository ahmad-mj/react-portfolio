import { useCart } from "../context/CartContext";
import { useState } from "react";

const Checkout = () => {
  const { cart, dispatch } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const allFieldsFilled = Object.values(formData).every(Boolean);
    if (!allFieldsFilled) {
      alert("Please fill out all shipping fields.");
      return;
    }

    const order = {
      id: Date.now(), // simple unique ID
      items: cart,
      total,
      shippingInfo: formData,
      createdAt: new Date().toISOString(),
    };

    // Save to localStorage
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([order, ...existingOrders]));

    // Clear cart + show success
    dispatch({ type: "CLEAR" });
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="p-6 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">🎉 Order Placed!</h2>
        <p className="text-gray-600">
          Thank you, {formData.name}. Your order is on its way.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Summary */}
          <div className="mb-6">
            {cart.map((item) => (
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
                </div>
                <h3 className="font-semibold">
                  {item.title} x {item.quantity}
                </h3>
                <div className="text-right">
                  <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-4 font-bold text-lg">
              Total: ${total.toFixed(2)}
            </div>
          </div>

          {/* Shipping Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
