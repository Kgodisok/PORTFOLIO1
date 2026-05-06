import React, { useEffect, useState } from "react";
import localData from "../data/data.json";


const nameStyles = {
    fontSize: '45px',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px'
};
const imageStyles = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    display: 'block',
    margin: '20px auto'
};

const navaBarStyles = {
    backgroundColor: 'black'
};

const descriptionStyles = {
    fontSize: '18px',  
    color: 'grey',
    backgroundColor: 'white',
    border: '2px solid grey',
    margin: '20px auto',
    padding: '15px',
    maxWidth: '950px',
    borderRadius: '10px',
    boxShadow: '5px 20px 8px rgba(0, 0, 0, 0.1)',
};

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
        <div style={navaBarStyles}>
        <h1 style={nameStyles}>{`${data.name} ${data.surname}`}</h1>
        <img src='/images/profilePhoto.png' alt={`${data.name} ${data.surname}`} style={imageStyles}/>
        <h2 style={{color: 'white'}}>Junior Software Developer</h2>
        <p style={descriptionStyles}>{data.myDescription}</p>
        <p>Welcome to my portfolio</p>
        <p>I am {`${data.age} `} Years Old</p>
        </div>
    )
};

export default NavBar;



