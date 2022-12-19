import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
// eslint-disable-next-line
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditProducts from "./components/EditProducts";
import AddProducts from "./components/AddProducts";
import HomePage from "./components/HomePage";
import ViewProduct from "./components/ViewProduct";

toast.configure({
  autoClose: 2000,
  draggable: true,
  theme: "dark",
});

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
          <Route path="/getproductbyid/:id" element={<ViewProduct />} />
        </Routes>
      </section>
    </Router>
  );
}

export default App;
