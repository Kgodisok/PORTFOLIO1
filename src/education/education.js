import { useState, useEffect } from 'react';
import localData from '../data/data.json'
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import "./education.css";
const EducationDetails = () => {
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
        <div className='education-details'>
            <h1>Education</h1>
            <FaGraduationCap size={50} color='gold'/>
            <p><strong>School</strong>: {data.education.schoolName}</p>
            <p><strong>Course:</strong> {data.education.course}</p>
            <div className='date'>
                <FaCalendarAlt color='white'/>
                <p><strong>Date: </strong> {data.education.dateStarted} - {data.education.expectedGraduation} </p>
            </ div>
        </div>
    );
};

export default EducationDetails;