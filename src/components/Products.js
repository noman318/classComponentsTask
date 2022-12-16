import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllProduct, deleteProduct } from "../services/MyData";

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
          alert("Product Deleted");
          let data = this.state.proData.filter((pro) => pro._id !== id);
          this.setState({ proData: data });
        }
      });
    }
  };
  render() {
    return (
      <>
        <div>
          <h2> Crud Implemention of Data</h2>
          <div className="row">
            {this.state.proData.map((pro) => (
              <div className="col-sm-3 mx-2" key={pro._id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={pro.image}
                    className="card-img-top px-3"
                    alt="card-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{pro.name}</h5>
                    <p className="card-text">{pro.price}</p>
                    <Link
                      to={`/editproduct/${pro._id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => this.delPro(pro._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
