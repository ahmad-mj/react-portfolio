import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import About from "./containers/about";
import Home from "./containers/home";
import Contact from "./containers/contact";
import Portfolio from "./containers/portfolio";
import Resume from "./containers/resume";
import Skills from "./containers/TrainingPrograms/TrainingPrograms";
import Navbar from "./components/navbar";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import options from "./utils/particles";
import LanguageToggle from "./components/languageToggle";
import { LanguageProvider } from "./context/LanguageContext";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import './styles/tailwind-base.css';
import Layout from "./containers/layout";
import { WishlistProvider } from "./context/WishlistContext";



function App() {
  const location = useLocation();
  const homePage = location.pathname === '/';
  
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  // useEffect(() => {
  //   let isMounted = true;
  //   initParticlesEngine(async (engine) => {
  //     if (isMounted) await loadSlim(engine);
  //   }).then(() => isMounted && setInit(true));
  
  //   return () => { isMounted = false }; // Cleanup function
  // }, []);

  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };

  return (
      <CartProvider>
      <LanguageProvider>
        <WishlistProvider>
    <div className="App">
      {/* {(init && homePage &&
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )} */}
      <Navbar />
    <Layout >
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/home" Component={Home} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="/shop" Component={Shop} />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </Layout>
    </div>
    </WishlistProvider>
    </LanguageProvider>
      </CartProvider>
  );
}

export default App;
