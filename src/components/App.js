import React from "react";
import ProductList from "./ProductList";
import ProductDetails from './ProductDetails';
const App = () => {
    return (
       <div className="ui container grid-cols-3 gap-4">
        <div className="ui row">
            <div className="column eight wide">
                <ProductList/>
            </div>
            <div className="column eight wide">
                <ProductDetails/>
            </div>
        </div>
       </div>
    )
};

export default App;
