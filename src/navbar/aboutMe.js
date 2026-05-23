import React, { useEffect, useState } from "react";
import localData from "../data/data.json";
import { Typewriter } from "react-simple-typewriter";

import 
{ 
    imageStyles, 
    navBarStyles, 
    descriptionStyles, 
    nameStyles,
} from "./style";

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
            console.error("Could not fetch data.json, using local data:", err);
        });
    }, []);

    if (!data) return <p>Loading...</p>;
    return (
        <div style={navBarStyles}>
            <h1 style={nameStyles}>
                <Typewriter
                    words = {[`</> Hello! I am, ${data.name} ${data.surname} `]}
                    loop = {1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={40}
                />
            </h1>
            <img src='/images/profilePhoto.png' alt={data.name} style={imageStyles}/>
            <p className="sde-tittle"><u>{data.myTittle}</u></p>
            <p style={descriptionStyles} className="prf-summary"><Typewriter 
                    words = {[`${data.myProfileSummary}`]}
                    loop = {1}
                    cursor
                    typeSpeed = {40}
                />
            </p>
        </div>
    )
};

export default NavBar;



