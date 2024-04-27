import "./style.scss";
// import "./App.css";
import NavBar from "./sections/header/navBar/NavBar";
import Hero from "./sections/header/hero/Hero";
import Features from "./sections/features/Features";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
