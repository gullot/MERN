import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TableHead from '../components/TableHead';


// EDIT
export const EditPage = ({hike}) => {

    const [trail,  setTrail] = useState(hike.trail);
    const [distance, setDistance] = useState(hike.distance);
    const [elevation, setElevation] = useState(hike.elevation);
    const [duration, setDuration] = useState(hike.duration);
    const [date, setDate] = useState(hike.date.slice(0,10));

    const nav = useNavigate();

    const editHike = async () => {

        const resp = await fetch(`/hikes/${hike._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                trail: trail,
                distance: distance,
                elevation: elevation,
                duration: duration,
                date: date
            }),
            headers: {
            'Content-Type': 'application/json',
            }
        });

        if (resp.status === 200) {
            alert("Edit succesful!");
            nav("/hikelog");
        } else {
            const err = await resp.json();
            alert(`Fail to edit hike with status ${resp.status}, ${err.Error}`);
            nav("/hikelog");
        }

    };

    return (
        <>
        <h2>Edit a Hike</h2>
        <p>Update your hike below!</p>

        <table id="hikes">
            <caption>Edit a Hike!</caption>
            <TableHead/>
            <tbody>
                <tr>
                    <td><label for="hiketrail" class="required">
                        <input type="text"
                                value={trail} 
                                id="trailname" 
                                name="trail"
                                onChange={h => setTrail(h.target.value)} required
                                autoFocus />
                    </label></td>

                    <td>
                        <label for="hikedist" class="required">
                            <input type="number"
                                    value={distance}
                                    id="hikedist"
                                    name="distance"
                                    onChange={h => setDistance(h.target.value)} required />
                        </label>
                    </td>

                    <td>
                        <label for="hikemax" class="required">
                            <input type="number"
                                    value={elevation}
                                    id="hikemax"
                                    name="elevation"
                                    onChange={h => setElevation(h.target.value)} required />
                        </label>
                    </td>

                    <td>
                        <label for="hikeduration" class="required">
                            <input type="number"
                                    value={duration}
                                    id="hikeduration"
                                    name="duration"
                                    onChange={h => setDuration(h.target.value)} required />
                        </label>
                    </td>

                    <td>
                        <label for="hikedate" class="required">
                            <input type="date"
                                    value={date}
                                    id="hikedate"
                                    name="date"
                                    onChange={h => setDate(h.target.value)} required />
                        </label>
                    </td>

                    <td><button onClick={editHike}>Save</button></td>
                </tr>
            </tbody>

        </table>
        
        
        </>
    )

}

export default EditPage;