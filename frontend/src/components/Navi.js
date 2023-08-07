//compenent for our navigation

import React from 'react';
import {Link} from 'react-router-dom';
import {MdHome, MdList, MdHiking, MdOutlineFilter, MdOutlinePersonPin, MdAddShoppingCart} from 'react-icons/md';


// the "../" is so we can back out of our directory to get to the right spot
function Navi(){
    return (
        <nav className="Nav-app">
            <Link to="/"><i><MdHome/></i>Home</Link>
            <Link to="../topics"><i><MdList/></i>Topics</Link>
            <Link to="../hikelog"><i><MdHiking/></i>Hike Log</Link>
            <Link to="../gallery"><i><MdOutlineFilter/></i>Gallery</Link>
            <Link to="../staff"><i><MdOutlinePersonPin/></i>Staff</Link>
            <Link to="../order"><i><MdAddShoppingCart/></i>Order</Link>
        </nav>
    );
}

export default Navi