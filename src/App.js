
import React from 'react'
import ProductList from "./pages/ProductList";
import ProductDetails from './pages/ProductDetails';


const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
