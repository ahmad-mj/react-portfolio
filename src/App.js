import { Route, Routes } from "react-router-dom";
import "./App.scss";
// import About from "./containers/about";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Navbar from "./components/navbar";
import { LanguageProvider } from "./context/LanguageContext";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import "./styles/tailwind-base.css";
import Layout from "./containers/layout";
import { WishlistProvider } from "./context/WishlistContext";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import TrainingPage from "./containers/TrainingPrograms/TrainingProgramsPage";

function App() {
  return (
    <LanguageProvider>
      <WishlistProvider>
        <CartProvider>
          <div className="App">
            <Navbar />
            <Layout>
              <Routes>
                <Route path="/" Component={Home} />
                {/* <Route path="/about" Component={About} /> */}
                <Route path="/contact" Component={Contact} />
                <Route path="/home" Component={Home} />
                <Route path="/portfolio" Component={Portfolio} />
                <Route path="/shop" Component={Shop} />
                <Route path="/cart" Component={Cart} />
                <Route path="/checkout" Component={Checkout} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/training-programs" Component={TrainingPage} />
              </Routes>
            </Layout>
          </div>
        </CartProvider>
      </WishlistProvider>
    </LanguageProvider>
  );
}

export default App;
