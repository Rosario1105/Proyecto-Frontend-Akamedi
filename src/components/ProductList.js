import React, {Component} from "react";
import { connect } from "react-redux";
import { selectProduct } from "../actions";


class ProductList extends Component{
    renderList(){
        return this.props.products.map((product) => {
            return (
                <div className="item" key={product.image} >
                    <div className="right floated content" >
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectProduct(product)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{product.name}</div>
                    <img src={product.image_URL} alt={product.name} />

                </div>
            );
        });
    }

   render(){
    return <div className="ui divided list"> {this.renderList()}</div>
   } 
}

const mapStateToProps = state => {
    console.log(state);
    return {products: state.products};
}

export default  connect(mapStateToProps, {
    selectProduct: selectProduct
})(ProductList);