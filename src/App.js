import "./App.css";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
