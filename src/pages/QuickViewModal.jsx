import React from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";

const QuickViewModal = ({ isOpen, onClose, product }) => {
  const { cart, dispatch } = useCart();

  if (!isOpen || !product) return null;

  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;

  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: product });
  };
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-4xl bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden transition-all">
          <div className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-800">
            <Dialog.Title className="text-xl font-bold text-[#111] dark:text-white">
              {product.title}
            </Dialog.Title>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col md:flex-row p-6 gap-6">
            {/* Image slider placeholder */}
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-xl w-full h-auto object-cover"
              />
              {/* Add carousel later */}
            </div>

            {/* Product Info */}
            <div className="flex-1 text-[#111] dark:text-[#f5f5f5] space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
              <p className="text-lg font-semibold">${product.price}</p>

              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Delivery in 3–5 days
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Available sizes: S, M, L
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  {quantity > 0 ? `In Cart (${quantity})` : "Add to Cart"}
                </button>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                  Save for Later
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default QuickViewModal;
