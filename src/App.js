import Data from "./components/Data";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";
import Pricing from "./components/Pricing"
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-black w-screen h-screen overflow-x-hidden overscroll-none ">
      <Navbar />
      <Hero />
      <Data />
      <Subscription />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
