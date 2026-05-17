import React, { useEffect, useState } from "react";
import localData from "../data/data.json";
import {
    nameStyles,
    descriptionStyles, 
    imageStyles, 
    navBarStyles 
} from './styles'

const NavBar = () => {
    const [data, setData] = useState(localData || null);

    useEffect(() => {
        fetch("../data/data.json")
        .then((res) => {
            if (!res.ok) {
            throw new Error("Failed to fetch JSON");
            }
            return res.json();
        })
        .then((json) => setData(json))
        .catch((err) => {
            console.error("Could not fetch /information/data.json, using local data:", err);
        });
    }, []);

    if (!data) return <p>Loading...</p>;
    return (
        <div style={navBarStyles}>
            <h1 style={nameStyles}>{`</> Hello, I am ${data.name} ${data.surname}`}</h1>
            <img src='/images/profilePhoto.png' alt={data.name} style={imageStyles}/>
            <h2 style={{color: 'white'}}>{data.mytittle}</h2>
            <p style={descriptionStyles}>{data.myProfileSummary}</p>
        </div>
    )
};

export default NavBar;



