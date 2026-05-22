import {
    SiReact,
    SiJson,
    SiNodedotjs, 
    SiExpress
} from "react-icons/si";

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <h2>Portmat – Accommodation Marketplace</h2>
            <p>Engineered Portmat, a scalable accommodation marketplace designed to simplify room discovery and property management with modern web technologies and responsive user experience.</p>
            <p className="skill-item-project"><strong>Tech stack</strong> (React<SiReact size={22} color="#61DBFB" /> , Express <SiExpress size={22} />, Node <SiNodedotjs size={22} color="#68A063" /> & JSON <SiJson size={22} />)</p>
            <a href="https://portmat-accommodation.vercel.app"><button className="live-btn">Live Demo</button></a>
        </div>
    )
}

export default Projects;