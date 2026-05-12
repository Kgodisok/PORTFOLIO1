import { useState, useEffect } from "react";
import localData from "../data/data.json";
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
const iconStyles ={
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    color: 'grey',
    backgroundColor: 'black',
    fontSize: '18px',
}

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
                <p>&copy; 2026 Matsepe Kgodiso, <em>Built In React.js. Portfolio in Progress.</em></p>
                <div style={iconStyles}>
                    <a href={`https://wa.me/${data.cellPhoneNumber[0]}`} target="_blank" rel="noopener noreferrer">{<FaWhatsapp/>}</a>
                    <br />
                    
                    <a href={`mailto:${data.emailAddress}`}>{<FaEnvelope/>}</a>
                    <br />
                    <a href={`tel:${data.cellPhoneNumber[0]}`}>{<FaPhone/>}</a>
                    <br />
                    <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">
                    {<FaLinkedinIn />}</a>
                    <br />
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                    {<SiGithub />}</a>
                    <br />
                </div>
            </footer>
    );
};

export default Footer;


