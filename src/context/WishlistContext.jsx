import { createContext, useContext, useEffect, useReducer } from "react";

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      return state.some((item) => item.id === action.payload.id)
        ? state.filter((item) => item.id !== action.payload.id)
        : [...state, action.payload];
    default:
      return state;
  }
};
const getInitialWishlist = () => {
  try {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to parse wishlist from localStorage ", error);
    return [];
  }
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [], getInitialWishlist);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
