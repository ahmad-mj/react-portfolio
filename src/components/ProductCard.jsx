import { useState } from "react";
import { useCart } from "../context/CartContext";
import QuickViewModal from "../pages/QuickViewModal";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;

  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <>
      <div className="rounded-xl shadow-md p-4 bg-white dark:bg-gray-900 relative group">
      <img
  src={product.images?.[0]}
  alt={product.title}
  className="w-full h-40 object-cover rounded"
/>
        <h2 className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {product.description}
        </p>
        <p className="text-md font-semibold mt-1 text-black dark:text-white">
          ${product.price}
        </p>

        <div className="flex gap-2 mt-3">
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setIsQuickViewOpen(true)}
            className="px-4 py-2 border border-gray-300 text-gray-700 dark:text-white dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Quick View
          </button>
        </div>

        {quantity > 0 && (
          <span className="mt-2 text-green-600 dark:text-green-400 font-semibold block">
            In cart: {quantity}
          </span>
        )}
      </div>

      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
        product={product}
      />
    </>
  );
};

export default ProductCard;
