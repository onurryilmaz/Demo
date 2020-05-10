import React from 'react';
import CreateProduct from './components/modal/createProduct'
import ProductList from './components/productList'

const index = () => {
    return (
        <div>
            <CreateProduct/>
            <ProductList/>
        </div>
    );
}

export default index;
