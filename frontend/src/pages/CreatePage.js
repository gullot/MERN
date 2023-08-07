import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import TableHead from '../components/TableHead';
//import {MdAddCircle} from 'react-icons/md';

export const CreatePage = () => {
    const [trail,       setTrail] = useState();
    const [distance,    setDistance] = useState('0');
    const [elevation,   setElevation] = useState('0');
    const [duration,    setDuration] = useState('0');
    const [date,        setDate] = useState();

    const nav = useNavigate();

    const addHike = async () => {
        const newHike = {trail, distance, elevation, duration, date};
        console.log(newHike);
        const resp = await fetch('/hikes', {
            method: 'post',
            body: JSON.stringify(newHike),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (resp.status === 201){
            alert('Success in adding row to log.');
            nav('/');
        } else {
            alert('Failed to add a row to log, need input.');
        }
        nav('/hikelog');
    };

    return (
        <>
        <h2>Log a Hike</h2>
        <article>
            <p>Enter your latest adventure!</p>
            <table id="hikes">
                <caption>Add a hike to the log</caption>
                <TableHead/>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
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

                        <td><button onClick={addHike}>Save</button></td>

                    </tr>
                </tbody>
            </table>
        </article>
        
        
        </>
    )

}

export default CreatePage;

// trail: trail,
// distance: distance,
// max_elevation: max_elevation,
// gain_elevation: gain_elevation,
// duration: duration,
// date: date,
// trip_plan: trip_plan