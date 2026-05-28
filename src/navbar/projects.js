import {
    SiReact,
    SiJson,
    SiNodedotjs, 
    SiExpress,
    SiMysql
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <FaLaptopCode color="white" size={45}/>
            <h2>Portmat – Accommodation Marketplace</h2>
            <p className="project-content">Independently developed and deployed Portmat, a live full-stack accommodation platform built with React (Vite), Node.js, Express, and MySQL. The platform is currently live and actively serves real-time accommodation data through integrated RESTful API endpoints. The React (Vite) frontend communicates directly with the Node/Express backend to fetch, process, and render dynamic listings, enabling responsive search and filtering based on user input. Core backend services support data retrieval, request handling, and API response delivery in a production environment, delivering a fully functional and interactive user experience. The MySQL database layer is actively being refined and prepared for full production-scale hosting and optimization.</p>
            <p className="skill-item-project"><strong>Tech Stack</strong> React <SiReact size={30} color="#61DBFB"/>, Node <SiNodedotjs size={30} color="#68A063"/>, Express <SiExpress size={30}/>, MySQL <SiMysql size={40} color="#00758F" /> & JSON <SiJson size={22}/></p>
            <a href="https://portmat-accommodation.vercel.app"><button className="live-btn">View Project</button></a>
        </div>
    )
}

export default Projects;