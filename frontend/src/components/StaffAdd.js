import React from 'react';

function StaffAdd({ staff }) {

    return(
        <tr>
            <td>
                <img src={staff.picture.thumbnail} alt="random picture" />
            </td>
            <td>
                <a href="mailto:{staff.email}">
                    {staff.name.first}
                    {staff.name.last}
                </a>
            </td>
            <td>{staff.phone}</td>
            <td>{staff.location.city}</td>

        </tr>
    )
    
}

export default StaffAdd