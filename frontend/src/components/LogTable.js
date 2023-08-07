import React from 'react';
import TableHead from './TableHead';
import LogRow from './LogRow';

function LogTable({ hikes, onEdit, onDelete }) {

    return(
        <table id="hikes">
            <caption>Delete and Edit Hikes Here</caption>
            <TableHead />
            <tbody>
                {hikes.map((hike, i) =>
                <LogRow
                    hike={hike}
                    key={i}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />)}
            </tbody>
        </table>
    )
    
}

export default LogTable;