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

const navBarStyles = {
    backgroundColor: 'black',
    padding: '2px'
};

const descriptionStyles = {
    fontSize: '18px',  
    backgroundColor: 'white',
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
        <div style={navBarStyles}>
            <h1 style={nameStyles}>{`</> Hello, I am ${data.name} ${data.surname}`}</h1>
            <img src='/images/profilePhoto.png' alt={data.name} style={imageStyles}/>
            <h2 style={{color: 'white'}}>{data.myTittle}</h2>
            <p style={descriptionStyles}>{data.myProfileSummary}</p>
        </div>
    )
};

export default NavBar;



