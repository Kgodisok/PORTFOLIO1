import { useState, useEffect } from "react";
import localData from "../data/data.json";
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { iconStyles } from "./style";



const Footer = () => {
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
    
            <footer styles={{backgroundColor: 'black', marginBottom: '0'}}>
                <div style={iconStyles}>

                    <a href={`https://wa.me/${data.cellPhoneNumber[0]}`} target="_blank" rel="noopener noreferrer">{< FaWhatsapp size={30}/>}</a>
                    <br />
                    
                    <a href={`mailto:${data.emailAddress}`}>{<FaEnvelope size={30}/>}</a><br />

                    <a href={`tel:${data.cellPhoneNumber[0]}`}>{<FaPhone size={30}/>}</a><br />

                    <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">{<FaLinkedinIn size={30}/>}</a><br />

                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                    {<SiGithub size={30} />}</a><br />

                </div>

                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', color: 'white' }}>
                    <p>{data.address.city}, {data.address.province}, {data.address.country}, {data.address.code}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black' }}>
                    <p style={{ color: 'white' }}>&copy; 2026 Matsepe Kgodiso, <i>Built In React.js. Portfolio in Progress.</i></p>
                </div>

            </footer>
    );
};

export default Footer;


