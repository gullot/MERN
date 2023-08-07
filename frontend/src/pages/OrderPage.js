import React from 'react';
import ProductAdd from '../components/ProductAdd.js';


function OrderPage({products}) {
    return (
        <>
        <h2>Order Time!</h2>
        <article>
            <h3>This is where you order some of my most beloved pet trinkets.</h3>

            <table id="productsTable">
                <caption>Choose ONLY ONE pet trinket</caption>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Product</th>
                        <th>Prices</th>
                        <th>Selection</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((thisProduct, index) =>
                    <ProductAdd
                        thing={thisProduct}
                        key={index}
                    />
                    )}
                </tbody>
            </table>
        </article>
        </>
    );
}

export default OrderPage;