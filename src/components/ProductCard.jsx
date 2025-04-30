import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

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
        onClick={() => dispatch({ type: "ADD", payload: product })}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded"
      >Add to Cart</button>
    </div>
  );
};

export default ProductCard;
