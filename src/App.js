import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditProducts from "./components/EditProducts";
import AddProducts from "./components/AddProducts";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <section className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/getproducts" element={<Products />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/editproduct/:id" element={<EditProducts />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
