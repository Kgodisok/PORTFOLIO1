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
    fontSize: '25px',
    color: 'grey',
    lineHeight: '1.6'
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
            // keep the localData fallback in state and log the error for debugging
            console.error("Could not fetch /information/data.json, using local data:", err);
        });
    }, []);

    if (!data) return <p>Loading...</p>;
    return (
        <div style={navaBarStyles}>
        <h1 style={nameStyles}>{`${data.name} ${data.surname}`}</h1>
        <img src='/images/profilePhoto.png' alt={`${data.name} ${data.surname}`} style={imageStyles}/>
        <h2 style={{color: 'white'}}>Aspiring Software Developer</h2>
        <p style={descriptionStyles}>I'm a passionate and dedicated software developer with a strong desire to create innovative solutions. With a solid foundation in programming languages such as JavaScript, Python, and Java, I have experience in developing web applications, mobile apps, and software solutions. I am constantly learning and staying up-to-date with the latest technologies to enhance my skills and deliver high-quality work. I am eager to contribute my knowledge and creativity to projects that make a positive impact.</p>
        <p>Welcome to my portfolio</p>
        <p>I am {`${data.age} `} Years Old</p>
        </div>
    )
};

export default NavBar;



