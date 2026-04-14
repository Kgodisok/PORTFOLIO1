import React, { useState, useEffect } from "react";
import localData from "../data/data.json";

const Skills = () => {
    // localData follows public/information/data.json structure: { skills: { programmingLanguages: [...] } }
    const initial = localData?.skills?.programmingLanguages ?? [];
    const [skills, setSkills] = useState(initial);

    useEffect(() => {
        fetch("/information/data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch JSON");
            }
            return res.json();
        })
        .then((json) => {
            const remote = json?.skills?.programmingLanguages ?? initial;
            setSkills(remote);
        })
        .catch((err) => {
            console.error("Could not fetch /information/data.json, using local data:", err);
            setSkills(initial);
        });
    }, []);

    if (!skills || skills.length === 0) return <p>No programming skills available.</p>;

    return (
        <div>
            <h2>Programming Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
