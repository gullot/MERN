import React, {useState} from 'react';
import StaffAdd from "../components/StaffAdd.js";

function StaffPage() {
    const [results, setInfo] = useState([]);
    const fetchInfo = () => {
        fetch("https://randomuser.me/api/?results=10")
            .then((response) => response.json())
            .then((response) => {
                setInfo(response.results);
            })
            .catch(() => {
                alert("Ope... something appears to be broken. Please try again later.")
            });
        };

    return (
        <>
        <h2>Staff</h2>
        <article>
            <p>
            <button id="selectServer" onClick={fetchInfo} value="call through server">Add Staff</button>
                from the almighty <a href="https://randomuser.me/" target="blank"> Random User Generator</a>
            </p>

                <table>
                  <caption>Name, email, phone, and location</caption>
                    <thead>
                      <tr>
                        <th>Portrait</th>
                        <th>Name/Email</th>
                        <th>Telephone</th>
                        <th>City</th>
                      </tr>
                    </thead>

                    <tbody>
                        {results.map((staff, index) => <StaffAdd staff={staff} key={index} />)}
                    </tbody>
                                          
                </table>
        </article>
        </>
    )

};

export default StaffPage;