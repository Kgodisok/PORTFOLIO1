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
            <p>Engineered Portmat, a scalable accommodation marketplace designed to simplify room discovery and property management with modern web technologies and responsive user experience.</p>
            <p className="skill-item-project"><strong>Tech Stack</strong> React <SiReact size={30} color="#61DBFB"/>, Node <SiNodedotjs size={30} color="#68A063"/>, Express <SiExpress size={30}/> & JSON <SiJson size={22}/></p>
            <a href="https://portmat-accommodation.vercel.app"><button className="live-btn">Live Demo</button></a>
        </div>
    )
}

export default Projects;