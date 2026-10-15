import {
    SiReact,
    SiJson,
    SiNodedotjs, 
    SiExpress,
    SiMysql
} from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import './projects.css';

const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h1 style={{fontWeight: '450'}}>Projects</h1>
            <FaLaptopCode color="white" size={45}/>
            <h3><u>Findrooms | Portmat – Accommodation Marketplace</u></h3>
            <p className="skill-item-project"><strong><h3>Tech Stack:</h3> </strong> React <SiReact size={30} color="#61DBFB"/>, Node <SiNodedotjs size={30} color="#68A063"/>, Express <SiExpress size={30}/>, MySQL <SiMysql size={40} color="#00758F" /> & JSON <SiJson size={22}/></p>
            <div className="project-content">
            <p>Founder & Developer – FindRooms | Portmat
                Independently founded, developed, and deployed FindRooms, a full-stack accommodation platform connecting people with accommodation listings across South Africa. Built a responsive React frontend and a Node.js/Express.js backend, integrating Supabase for database management. Implemented dynamic accommodation listings, search and filtering functionality, and React Lazy Loading and Suspense to improve loading performance and user experience. Managed the entire development lifecycle, from concept and implementation to deployment and production hosting.
            </p></div>
            <a href="https://www.findrooms.co.za"><button className="live-btn">View Project</button></a>
        </div>
    )
}

export default Projects;