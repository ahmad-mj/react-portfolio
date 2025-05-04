import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;

  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <div className="rounded-2xl p-4 bg-white dark:bg-[#1a1a1a] shadow-sm hover:shadow-md transition">
      <div className="aspect-square overflow-hidden rounded-xl mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h2 className="text-lg font-semibold text-[#111] dark:text-[#f5f5f5]">
        {product.title}
      </h2>
      <p className="text-sm text-[#555] dark:text-[#ccc] mt-1">{product.description}</p>
      <p className="text-md font-bold text-[#111] dark:text-[#fff] mt-2">${product.price}</p>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleAddToCart}
          className="px-4 py-2 rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111] text-sm font-medium hover:opacity-90 transition"
        >
          {quantity > 0 ? "Add More" : "Add to Cart"}
        </button>

        <button
          className="text-sm text-[#888] dark:text-[#aaa] hover:underline"
          title="Save for later"
        >
          ♡
        </button>
      </div>

      {quantity > 0 && (
        <div className="mt-2 text-green-600 text-sm font-semibold">
          In cart: {quantity}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
