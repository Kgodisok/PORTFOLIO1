import {
    SiReact,
    SiJson,
    SiNodedotjs, 
    SiExpress
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <FaLaptopCode color="white" size={45}/>
            <h2>Portmat – Accommodation Marketplace</h2>
            <p className="project-content">Built Portmat, a full-stack accommodation platform using React, Node.js, Express, and MySQL, designed to simplify accommodation discovery and property management through scalable architecture and a responsive user experience. The MySQL database layer is currently under active development and has not yet been deployed to production hosting, with ongoing schema refinement and backend feature integration.</p>
            <p className="skill-item-project"><strong>Tech Stack</strong> React <SiReact size={30} color="#61DBFB"/>, Node <SiNodedotjs size={30} color="#68A063"/>, Express <SiExpress size={30}/> & JSON <SiJson size={22}/></p>
            <a href="https://portmat-accommodation.vercel.app"><button className="live-btn">View Project</button></a>
        </div>
    )
}

export default Projects;