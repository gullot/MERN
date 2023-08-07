import React, {useState, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {MdHiking, MdOutlineLibraryAdd} from 'react-icons/md';
import LogTable from '../components/LogTable.js';

function LogPage({setHike}) {
    const nav = useNavigate();
    
    //load in all hikes
    const [hikes, setHikes] = useState([]);

    const loadHikes = async () => {
        const resp = await fetch('/hikes');
        const hikes = await resp.json();
        setHikes(hikes);
    }

    const onEditHike = async hike => {
        setHike(hike);
        nav("/edit-hike");
    }

    const onDeleteHike = async id => {

        //FETCH from the database location (/hikes)?????????????????????
        const response = await fetch(`/hikes/${id}`, { method: 'DELETE' });

        if (response.status === 204){
            const getResp = await fetch('/hikes');
            const hikes = await getResp.json();
            setHikes(hikes);
        } else {
            console.error(`The row for id: ${id} failed deletion. Status: ${response.status}.`);
        }
    }

    //load the hikes
    useEffect(() => {
        loadHikes();
    }, []);

    // display the hikes
    return (
        <>
        <h2>Log a Hike</h2>
        <article>
            <p>Click the icons to update the Hike Log! Or add here: <Link to="../add-hike"><i><MdHiking/><MdOutlineLibraryAdd/></i></Link></p>
            <LogTable
                hikes={hikes}
                onEdit={onEditHike}
                onDelete={onDeleteHike}
            />
        </article>
        </>
    );

}

export default LogPage;