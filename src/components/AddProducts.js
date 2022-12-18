import React, { Component } from "react";
import { SaveProduct } from "../services/MyData";
import { toast } from "react-toastify";
// eslint-disable-next-line
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withRoutes from "./withRoutes";

toast.configure({
  autoClose: 2000,
  draggable: true,
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
          <div className="form-group mt-3">
            <h5>Product Name</h5>
            <div className="d-flex">
              <input
                type="text"
                name="name"
                required
                minLength={1}
                maxLength={10}
                placeholder="Enter Product Name"
                className="form-control"
                onChange={this.handler}
              />{" "}
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <div className="form-group mt-3 w-25">
            <h5>Price</h5>
            <div className="d-flex">
              <input
                type="number"
                // pattern="/^[1-9]+$/"
                required
                name="price"
                minLength={1}
                maxLength={5}
                className="form-control"
                onChange={this.handler}
                placeholder="Enter Price"
              />
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <div className="form-group mt-3 w-25">
            <h5>Quantity</h5>
            <div className="d-flex">
              <input
                type="number"
                // pattern="/^[0-9]+$/"
                name="quantity"
                required
                minLength={1}
                maxLength={5}
                className="form-control"
                placeholder="Enter Quantity"
                onChange={this.handler}
              />
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <div className="form-group mt-3">
            <h5>Description</h5>
            <div className="d-flex">
              {/* <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="form-control"
                required
                onChange={this.handler}
              /> */}
              <textarea
                className="form-control"
                name="description"
                placeholder="Enter Description"
                onChange={this.handler}
                minLength={4}
                maxLength={30}
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>

              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <div className="form-group mt-3">
            <h5>Image URL</h5>
            <div className="d-flex">
              <input
                type="text"
                name="image"
                placeholder="Enter Image URL"
                className="form-control"
                onChange={this.handler}
                required
              />
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <br />
          <button
            type="submit"
            value="Add Products"
            className="btn btn-success"
            // onClick={this.showSuccess}
          >
            <i className="bi bi-plus-square"></i> Add Products
          </button>
        </form>
      </div>
    );
  }
}
export default withRoutes(Addproducts);
