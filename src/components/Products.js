import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// eslint-disable-next-line
import { ToastContainer } from "react-toastify";
import { getAllProduct, deleteProduct } from "../services/MyData";

toast.configure({
  autoClose: 2000,
  draggable: true,
  theme: "dark",
});

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { proData: [] };
  }
  componentDidMount() {
    getAllProduct()
      .then((res) => {
        // console.log(res.data);
        this.setState({ proData: res.data });
      })
      .catch((err) => console.log(err));
  }
  delPro = (id) => {
    if (window.confirm("Do you want to delete ?")) {
      deleteProduct(id).then((res) => {
        if (res.data) {
          // alert("Product Deleted");
          toast.error("Product Deleted Successfully");
          let data = this.state.proData.filter((pro) => pro._id !== id);
          this.setState({ proData: data });
        }
      });
    }
  };
  render() {
    return (
      <div>
        <h2> Products</h2>
        <div className="row">
          {this.state.proData.map((pro) => (
            <div className="col-sm-3" key={pro._id}>
              <div
                className="card my-3"
                style={{ width: "250px", height: "320px" }}
              >
                <img
                  src={pro.image}
                  className="card-img-top p-2"
                  width={100}
                  height={150}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{pro.name}</h5>
                  <p className="card-text">Rs. {pro.price}</p>
                  <div className="d-flex">
                    <Link
                      to={`/editproduct/${pro._id}`}
                      className="btn btn-primary m-2"
                    >
                      {" "}
                      <i className="bi bi-pencil"></i> Edit
                    </Link>
                    <Link
                      to={`/getproductbyid/${pro._id}`}
                      className="btn btn-warning m-2"
                    >
                      {" "}
                      <i className="bi bi-eye"></i> View
                    </Link>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => this.delPro(pro._id)}
                    >
                      {" "}
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
