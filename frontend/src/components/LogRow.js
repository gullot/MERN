import React from 'react';
import {MdEdit, MdDelete} from 'react-icons/md';

function LogRow({hike, onDelete, onEdit}) {

    return(
        <tr>
            <td title="What is the hike called?" >{hike.trail}</td>
            <td title="How far in miles?" >{hike.distance}</td>
            <td title="What is the elevation in feet?" >{hike.elevation}</td>
            <td title="What is the duration in hours?" >{hike.duration}</td>
            <td title="When did you complete it?" >{hike.date.slice(0,10)}</td>
            <td><i><MdEdit onClick={() => onEdit(hike)} title="Click to edit hike"></MdEdit></i></td>
            <td><i><MdDelete onClick={() => onDelete(hike._id)} title="Click to delete hike"></MdDelete></i></td>
        </tr>
    );
}

export default LogRow;