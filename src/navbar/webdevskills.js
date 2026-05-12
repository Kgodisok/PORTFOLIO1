import data from "../data/data.json"; // adjust path to the component's locatio
import {
  SiPython,
  SiJavascript,
  SiJava,
  SiCsharp,
  SiHtml5,
  SiCss,
  SiReact,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiJson,
  SiVercel,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
  SiFigma
} from "react-icons/si";

const WebDev =() => {

const skillStyles = {
	backgroundColor: 'light indigo',
	color: 'black', 
	padding: '10px', 
	borderRadius: '1px', 
	marginBottom: '2px', 
	marginTop: '6px', 
	boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.1)',
	fontSize: '18px',
}

return (
	<div>
		<div style={skillStyles}>
		<h2>Programming Skills</h2>
		<SiPython size={30} color="#306998" />
		<p>Python</p>
		<SiJavascript size={30} color="#f0db4f" />
		<p>JavaScript</p>
	</div>

	<div style={skillStyles}>
		<h3>Web Development Skills</h3>
		<h3>Front-End</h3>
		<div>
		<h4>Markup and Styling</h4>
		<SiHtml5 size={30} color="#e34c26" />
		<p>HTML5</p>
		<SiCss size={30} color="#264de4" />
		<p>CSS3</p>

		<h4>JavaScript Front-End</h4>
		<SiReact size={30} color="#61DBFB" />
		<p>React.js</p>

		<h3>Back-End</h3>
		<h4>Python Frameworks</h4>
		<SiFlask size={30} color="#000000" />
		<p>Flask API</p>

		<h4>JavaScript Back-End</h4>
		<SiNodedotjs size={30} color="#68A063" />
		<p>Node.js</p>
		<SiExpress size={30} color="#000000" />
		<p>Express.js</p>

		<h4>Java Frameworks</h4>
		<SiSpringboot size={30} color="#6DB33F" />
		<p>Spring Boot</p>
		</div>

		<h4>Databases</h4>
		<SiMysql size={60} color="#00758F" />
		<p>MySQL</p>
		<SiPostgresql size={30} color="#336791" />
		<p>PostgreSQL</p>
		<SiJson size={30} color="#000000" />
		<p>JSON</p>
		</div>

		<div style={skillStyles}>
		<h3>Cloud and DevOps</h3>
		<p>AWS, S3, EC2, Lambda, DynamoDB</p>
		<p>Vercel</p>
		
		<div style={skillStyles}>
		<h3>Tools and Platforms</h3>
		<h4>Microsoft</h4>
		<p>Microsoft 365</p>
		<p>Microsoft Word</p>
		<p>Microsoft Excel</p>
		<p>Microsoft PowerPoint</p>
		</div>

		<h4>Development Tools</h4>
		<p>Visual Studio Code</p>
		<SiGit size={30} color="#F05032" />
		<p>Git</p>
		<SiGithub size={30} color="#000000" />
		<p>GitHub</p>
		<p>Git Bash</p>

		<h4>UI/UX Design</h4>
		<SiFigma size={30} color="#F24E1E" />
		<p>Figma</p>
		</div>
	</div>
)
};
export default WebDev;