import React, { Component } from "react";
import { getProductById, updateProduct } from "../services/MyData";
import { toast } from "react-toastify";
// eslint-disable-next-line
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withRoutes from "./withRoutes";
toast.configure({
  autoClose: 5000,
  draggable: true,
  theme: "dark",
});
class Editproducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      quantity: "",
      description: "",
      image: "",
    };
    this.handleSubmit1 = this.handleSubmit1.bind(this);
    this.handler = this.handler.bind(this);
  }

  handleSubmit1 = (e) => {
    e.preventDefault();
    updateProduct(this.props.params.id, this.state)
      .then((res) => {
        this.setState({
          name: res.data.name,
          price: res.data.price,
          quantity: res.data.quantity,
          description: res.data.description,
          image: res.data.image,
        });
        if (res.data) {
          toast.success("Product Edited");
          this.props.navigate("/getproducts");
        }
      })
      .catch((err) => {
        toast.error("Error occurred");
        console.log(err);
      });
  };
  handler = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState((prev) => ({ [name]: value }));
  };
  componentDidMount() {
    getProductById(this.props.params.id).then((res) => {
      // console.log(this.props.params.id);
      this.setState({
        name: res.data.name,
        price: res.data.price,
        quantity: res.data.quantity,
        description: res.data.description,
        image: res.data.image,
      });
    });
  }
  render() {
    return (
      <div>
        <h4> Edit Data</h4>
        <form className="w-50" onSubmit={this.handleSubmit1}>
          <div className="form-group mt-3">
            <h5>Product Name</h5>
            <div className="d-flex">
              <input
                type="text"
                name="name"
                minLength={1}
                maxLength={10}
                className="form-control"
                required
                value={this.state.name || ""}
                onChange={this.handler}
              />
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <div className="form-group w-25 mt-3">
            <h5>Price</h5>
            <div className="d-flex">
              <input
                type="number"
                // pattern="/^[1-9]+$/"
                name="price"
                minLength={1}
                maxLength={5}
                className="form-control"
                value={this.state.price}
                required
                onChange={this.handler}
              />
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <div className="form-group w-25 mt-3">
            <h5>Quantity</h5>
            <div className="d-flex">
              <input
                type="number"
                name="quantity"
                minLength={1}
                maxLength={5}
                pattern="/^[0-9]+$/"
                className="form-control"
                value={this.state.quantity}
                required
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
                className="form-control"
                value={this.state.description}
                required
                onChange={this.handler}
              /> */}
              <textarea
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handler}
                minLength={4}
                maxLength={30}
                required
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>

              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>{" "}
          <div className="form-group mt-3">
            <h5>Image URL</h5>
            <div className="d-flex">
              <input
                type="text"
                name="image"
                className="form-control"
                value={this.state.image}
                required
                onChange={this.handler}
              />
              <i className="bi bi-asterisk icon"></i>
            </div>
          </div>
          <br />
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default withRoutes(Editproducts);
