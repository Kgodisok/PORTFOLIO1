import { useState, useEffect } from 'react';
import localData from '../data/data.json'

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
            <h3>Education</h3>
            <p>School: {data.education.schoolName}</p>
            <p>Course: {data.education.course}</p>
            <p>Date: {data.education.dateStarted} - {data.education.expectedGraduation}</p>
        </div>
    );
};

export default EducationDetails;


