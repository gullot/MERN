import React from 'react';
import ProductAmount from './ProductAmount';

function ProductAdd({thing}){
    return(
        <tr>
            <td>{thing.company}</td>
            <td>{thing.product}</td>
            <td>{thing.price.toLocaleString('en-us', {style: 'currency', currency: 'USD'})}</td>
            <td><ProductAmount /></td>
        </tr>
    );
}

export default ProductAdd;