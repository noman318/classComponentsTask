// import instance from "../API/api_instance";
import instance from "../API/api_instance";

const getAllProduct = () => {
  return instance.get(`getproducts`);
};

const SaveProduct = (data) => {
  return instance.post(`addproduct`, data);
};

const updateProduct = (id, data) => {
  return instance.put(`editproduct/${id}`, data);
};

const deleteProduct = (id) => {
  return instance.delete(`deleteproduct/${id}`);
};

const getProductById = (id) => {
  return instance.get(`getproductbyid/${id}`);
};

export {
  SaveProduct,
  getProductById,
  getAllProduct,
  deleteProduct,
  updateProduct,
};
