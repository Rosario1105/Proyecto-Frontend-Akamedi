import React from "react";
import { connect } from "react-redux";

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div> Select a product </div>;
  }

  return (
  <div>
    <h3>Details for:</h3>
    <p>
        Name: {product.name}
        <br></br>
        Category: {product.category} 
        <br></br>
        Price: {product.price} 
        <br></br>
        Stock: {product.stock}
        <br></br>
        Description: {product.description}
        <br></br>
        <img src={product.image_URL} alt={product.name} />

    </p>
  </div>
);
};

const mapStateToProps = (state) => {
  return { product: state.selectedProduct };
};

export default connect(mapStateToProps)(ProductDetails);
