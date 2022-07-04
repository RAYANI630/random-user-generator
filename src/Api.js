import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card';
import axios from "axios"


//https://randomuser.me/api/

export default function Api() {

    const [userData, setuserData] = useState([]);

    function getData() {

        return (

            axios.get("https://randomuser.me/api/?results=21").then((res) => {
                setuserData(res.data.results);
                console.log(userData);
            })
        )
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Random User Generator</h1>
            <div className='container'>
                {userData.map((user) => (


                    <Card
                        name={user.name.first}
                        address={user.location.country}
                        source={user.picture.large}
                    />

                ))}
            </div>
        </div>
    )
}
