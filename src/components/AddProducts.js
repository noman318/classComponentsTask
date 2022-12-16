import React, { Component } from "react";
import { SaveProduct } from "../services/MyData";
import withRoutes from "./withRoutes";
class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", city: "" };
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
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              pattern="/^[1-9]+$/"
              required
              name="price"
              className="form-control"
              onChange={this.handler}
            />
          </div>
          <div className="form-group">
            <label>Quantity</label>
            <input
              type="number"
              pattern="/^[0-9]+$/"
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
          <input
            type="submit"
            value="Add Products"
            className="btn btn-success"
          />
        </form>
      </div>
    );
  }
}
export default withRoutes(Addproduct);
