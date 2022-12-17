import Data from "./components/Data";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      <Navbar />
      <Hero />
      <Data />
      <Subscription />
    </div>
  );
}

export default App;
