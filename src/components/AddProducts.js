import React, { Component } from "react";
import { SaveProduct } from "../services/MyData";
import { toast } from "react-toastify";
// eslint-disable-next-line
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withRoutes from "./withRoutes";

toast.configure({
  autoClose: 5000,
  draggable: true,
  pauseOnHover: false,
  theme: "dark",
});

class Addproducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      description: "",
      image: "",
    };
  }
  handler = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    SaveProduct({
      image: this.state.image,
      name: this.state.name,
      price: this.state.price,
      quantity: this.state.quantity,
      description: this.state.description,
    })
      .then((res) => {
        if (res.data) {
          toast.success("Product added");
          this.props.navigate("/getproducts");
        }
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div>
        <h4> Add Data</h4>
        <form className="w-50" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              required
              className="form-control"
              onChange={this.handler}
            />
          </div>
          <div className="form-group w-25">
            <label>Price</label>
            <input
              type="number"
              // pattern="/^[1-9]+$/"
              required
              name="price"
              className="form-control"
              onChange={this.handler}
            />
          </div>
          <div className="form-group w-25">
            <label>Quantity</label>
            <input
              type="number"
              // pattern="/^[0-9]+$/"
              name="quantity"
              required
              className="form-control"
              onChange={this.handler}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              className="form-control"
              required
              onChange={this.handler}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              className="form-control"
              onChange={this.handler}
              required
            />
          </div>
          <br />
          <button
            type="submit"
            value="Add Products"
            className="btn btn-success"
            // onClick={this.showSuccess}
          >
            Add Products
          </button>
        </form>
      </div>
    );
  }
}
export default withRoutes(Addproducts);
