import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Heart, HeartOff } from "lucide-react";
import QuickViewModal from "./../pages/QuickViewModal";

const ProductCard = ({ product, isWishlisted, onToggleWishlist }) => {
  const { cart, dispatch } = useCart();
  const [showQuickView, setShowQuickView] = useState(false);

  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;

  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <>
      <div className="relative rounded-xl shadow-md p-4 bg-white dark:bg-gray-900 transition hover:shadow-lg">
        {/* Heart button */}
        <button
          onClick={onToggleWishlist}
          className="absolute top-3 right-3 z-10 p-1 rounded-full bg-white dark:bg-gray-800 shadow"
        >
          {isWishlisted ? (
            <Heart className="text-red-500" size={20} />
          ) : (
            <HeartOff size={20} />
          )}
        </button>

        {/* Product Image Click opens Quick View */}
        <div onClick={() => setShowQuickView(true)} className="cursor-pointer">
          <img
            src={product.images?.[0] || product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded"
          />
        </div>

        <h2 className="text-lg font-bold mt-2">{product.title}</h2>
        <p className="text-sm">{product.description}</p>
        <p className="text-md font-semibold mt-1">${product.price}</p>

        <button
          onClick={handleAddToCart}
          className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>

        {quantity > 0 && (
          <span className="mt-2 block text-green-700 font-semibold">
            In cart: {quantity}
          </span>
        )}
      </div>

      <QuickViewModal
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
        product={product}
        isWishlisted={isWishlisted}
        onToggleWishlist={onToggleWishlist}
      />
    </>
  );
};

export default ProductCard;
