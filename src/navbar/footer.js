import { useState, useEffect } from "react";
import localData from "../data/data.json";
import { FaWhatsapp, FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { iconStyles } from "./style";
import { footerStyles } from "./style";

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
                console.error("Could not fetch data.json, using local data:", err);
            });
        }, []);
    
        if (!data) return <p>Loading...</p>;
    return (
            <footer styles={{backgroundColor: 'black', marginBottom: '0'}}>
                <h1 style={{color:"white", background:"black", margin: "0px"}}>Contact Informantion</h1>
                <div style={iconStyles} className="footer-contact-icons">
                    <a href={`https://wa.me/${data.cellPhoneNumber[0]}`} target="_blank" rel="noopener noreferrer">{< FaWhatsapp size={30} color="green"/>}</a><br />
                    <a href={`tel:${data.cellPhoneNumber[0]}`}>{<FaPhone size={30} color="darkGray"/>}</a><br />
                    <a href={`mailto:${data.emailAddress}`}>{<FaEnvelope size={30} color="orange"/>}</a><br />
                    <a href={data.linkedIn} target="_blank" rel="noopener noreferrer">{<FaLinkedinIn size={30} />}</a><br />
                    <a href={data.github} target="_blank" rel="noopener noreferrer">{<SiGithub size={30} color="white"/>}</a><br />
                    <a href="{data.x}" rel="noopener noreffer">{<FaXTwitter size={30} color="white"/>}</a>
                </div>
                <div style={footerStyles} className="footer-cnt">
                    <FaMapMarkerAlt color="white"/><p><u>{data.address.city}, {data.address.province}, {data.address.country}, {data.address.code}</u></p>
                </div>
                <div style={footerStyles}>
                    <p style={{ color: 'white', fontSize: "13px" }}>&copy; 2026 Matsepe Kgodiso | Built With React</p>
                </div>
            </footer>
    );
};

export default Footer;


