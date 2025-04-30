import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();

  const inCart = cart.find((item) => item.id === product.id);
  const quantity = inCart ? inCart.quantity : 0;
  const handleAddToCart = () => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <div className="rounded-xl shadow-md p-4 bg-white dark:bg-gray-900">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-sm">{product.description}</p>
      <p className="text-md font-semibold mt-1">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add to Cart
      </button>
      {quantity > 0 && (
        <span className="mt-2 text-green-700 font-semibold">
          In cart: {quantity}
        </span>
      )}
    </div>
  );
};

export default ProductCard;
