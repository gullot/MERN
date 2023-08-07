import React, {useState} from 'react';
import {GoArrowUp, GoArrowDown} from 'react-icons/go';

function ProductAmount(){
    const [amount, setAmount] = useState(0);

    const increase = () => setAmount(amount === 10 ? amount : amount + 1)
    const decrease = () => setAmount(amount === 0 ? 0 : amount - 1)

    return(
        <>
        <GoArrowDown onClick={decrease} class="larger"/>
        <span class="qu">{amount}</span>
        <GoArrowUp onClick={increase} class="larger" />
        </>
    );
}

export default ProductAmount;