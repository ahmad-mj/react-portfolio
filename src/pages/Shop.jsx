import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useProducts } from "../hooks/useProducts";

const Shop = () => {
  const [wishlist, setWishlist] = useState([]);
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };
  const { products, loading } = useProducts();
  if (loading) return <div className="p-4 text-center">Loading...</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          onToggleWishlist={() => toggleWishlist(product.id)}
        />
      ))}
    </div>
  );
};
export default Shop;
