import React from 'react';
//import {Link} from 'react-router-dom';
import {MdDelete, MdEdit} from 'react-icons/md';

//<th><Link to="../add-hike"><i><MdOutlineLibraryAdd title="add hike"></MdOutlineLibraryAdd></i></Link></th>

function TableHead() {
    return(
    <thead>
    <tr>
        <th title="What is the trail name?">Trail</th>
        <th title="How far did you go?">Distance (miles)</th>
        <th title="What is the max elevation?">Elevation (feet)</th>
        <th title="How long did it take?">Duration (hrs)</th>
        <th title="When did you go?">Date</th>
        <th title="Edit a hike here!"><i><MdEdit title="edit hike"></MdEdit></i>Edit</th>
        <th title="Delete this hike!"><i><MdDelete title="delete hike"></MdDelete></i>Delete</th>
    </tr>
    </thead>
    );
}

export default TableHead