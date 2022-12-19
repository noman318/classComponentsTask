import React, { Component } from "react";
import "../view.css";
import { getProductById } from "../services/MyData";
import withRoutes from "./withRoutes";

class ViewProduct extends Component {
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

  componentDidMount() {
    getProductById(this.props.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          price: res.data.price,
          quantity: res.data.quantity,
          description: res.data.description,
          image: res.data.image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Products</h2>
        {/* <div className="card" style={{ width: "250px", height: "320px" }}>
          <img
            src={this.state.image}
            className="card-img-top"
            alt="product-img"
          />
          <div className="card-body">
            <h5 className="card-title">Product Name: {this.state.name}</h5>
            <h5 className="card-title">Product Price: {this.state.price}</h5>
            <h5 className="card-title">
              Product Quantity: {this.state.quantity}
            </h5>
            <p className="card-text">
              Product Description: {this.state.description}
            </p>
            <a href="/" className="btn btn-primary">
              Product View
            </a>
          </div>
        </div> */}
        <div className="container d-flex justify-content-center">
          <figure className="card card-product-grid card-lg">
            {" "}
            <div className="img-wrap">
              {" "}
              <img src={this.state.image} alt="card-img" />
            </div>
            <figcaption className="info-wrap">
              <div className="row">
                <div className="col-md-6 col-xs-9">
                  {" "}
                  <h3>Name: {this.state.name}</h3>
                </div>
              </div>
            </figcaption>
            <div className="bottom-wrap-payment">
              <figcaption className="info-wrap">
                <div className="row">
                  <div className="col-md-9 col-xs-9">
                    {" "}
                    <h5>Price: ₹ {this.state.price}</h5>{" "}
                  </div>
                  <div className="col-md-3 col-xs-3">
                    <div className="text-right">
                      {" "}
                      <p style={{ fontSize: "20px" }}>
                        Quantity : {this.state.quantity}{" "}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="col-md-9 col-xs-9">
                    <h5>Description</h5>
                    <p style={{ fontSize: "20px" }}>{this.state.description}</p>
                  </div>
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    );
  }
}
export default withRoutes(ViewProduct);
