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
        <div className="projects">
            <h1 style={{fontWeight: '450'}}>Projects</h1>
            <FaLaptopCode color="white" size={45}/>
            <h3>Findrooms | Portmat – Accommodation Marketplace</h3>
            <p className="skill-item-project"><strong>Tech Stack</strong> React <SiReact size={30} color="#61DBFB"/>, Node <SiNodedotjs size={30} color="#68A063"/>, Express <SiExpress size={30}/>, MySQL <SiMysql size={40} color="#00758F" /> & JSON <SiJson size={22}/></p>
            <p className="project-content">Independently developed and deployed 'FindRooms | Portmat', a live full-stack accommodation platform built with React (Vite), Node.js, Express, and MySQL. The platform is currently live and actively serves real-time accommodation data through integrated RESTful API endpoints. The React (Vite) frontend communicates directly with the Node.js/Express backend to fetch, process, and render dynamic listings, enabling responsive search and filtering based on user input.

            To enhance performance and improve the user experience, the application implements 'React Lazy Loading' and 'Suspense' for code splitting, reducing initial load times and optimizing the delivery of components. Core backend services support data retrieval, request handling, and API response delivery in a production environment, delivering a fully functional and interactive user experience. The MySQL database layer is actively being refined and prepared for full production-scale hosting and optimization.
            </p>
            <a href="https://www.findrooms.co.za"><button className="live-btn">View Project</button></a>
        </div>
    )
}

export default Projects;