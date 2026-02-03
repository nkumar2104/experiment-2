import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import NotFound from "./NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
