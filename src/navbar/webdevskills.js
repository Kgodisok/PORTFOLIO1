import data from "../data/data.json"; // adjust path to the component's locatio

const WebDev =() => {
const theSkills = data?.skills?.programmingLanguages ?? [];
const javaScriptfrontEndwebDevSkills = data?.skills?.webDevelopment.javaScriptFrameWorks?.frontEnd ?? [];
const javaScriptbackEndwebDevSkills = data?.skills?.webDevelopment.javaScriptFrameWorks?.backEnd ?? [];
const pythonFrontEndSkills = data?.skills?.webDevelopment.pythonFrameWorks ?? [];
const javaBackEnd = data?.skills?.webDevelopment.javaFrameWorks ?? [];
const databases = data?.skills?.database ?? [];
const cloud = data?.skills?.cloudAndDevOps ?? [];
const thetoolsAndPlatforms = data?.skills?.toolsAndPlatforms?.microSoft ?? [];
const developmentTools = data?.skills?.toolsAndPlatforms?.devTools ?? [];
const UI_and_UX = data?.skills?.toolsAndPlatforms?.UI_UX_Design ?? [];

if (
	javaScriptfrontEndwebDevSkills.length === 0 &&
	javaScriptbackEndwebDevSkills.length === 0 &&
	pythonFrontEndSkills.length === 0 && 
	javaBackEnd.length === 0 &&
	databases.length === 0 &&
	cloud.length === 0 &&
	thetoolsAndPlatforms.length === 0 &&
	developmentTools.length === 0 &&
	UI_and_UX.length === 0 &&
	theSkills.length === 0	
)
	return <p>No web development skills available.</p>;

return (
	<div>
		<div style={{backgroundColor: 'grey', color: 'black', padding: '2px', borderRadius: '10px', marginBottom: '2px', marginTop: '2px', boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.1)'}}>
		<h2>Programming Skills</h2>
		<dev>
		{theSkills.map((s, i) => (
		<li key={i}>{s}</li>
		))}
		</dev>
	</div>
	<div style={{backgroundColor: 'grey', color: 'black', padding: '2px', borderRadius: '10px', marginBottom: '2px', marginTop: '2px', boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.1)'}}>
		<h3>Web Development Skills</h3>
		<h3>Front-End</h3>
		<div>
			<h4>JavaScript Front-End</h4>
		{javaScriptfrontEndwebDevSkills.map((s, i) => (
		<li key={i}>{s}</li>
		))}

		<h3>Back-End</h3>
		<h4>Python Frameworks</h4>
		{pythonFrontEndSkills.map((s, i) =>(
		<li key={i}>{s}</li>
		))}

		<h4>JavaScript Back-End</h4>

		{javaScriptbackEndwebDevSkills.map((s, i) => (
		<li key={i}>{s}</li>
		))}

		<h4>Java Back-End</h4>
		{javaBackEnd.map((s, i) => (
			<li key={i}>{s}</li>
		))}
		</div>
		<h4>Databases</h4>
		{databases.map((s, i) => (
			<li key={i}>{s}</li>
		))}
		</div>
		<div style={{backgroundColor: 'grey', color: 'black', padding: '2px', borderRadius: '10px', marginBottom: '2px', marginTop: '2px', boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.1)'}}>
			<h3>Cloud and DevOps</h3>
		{cloud.map((s, i) => (
			<li key={i}>{s}</li>
		))}

		<h3>Tools and Platforms</h3>
		<h4>Microsoft</h4>
		{thetoolsAndPlatforms.map((s, i) => (
			<li key={i}>{s}</li>
		))}

		<h4>Development Tools</h4>
		{developmentTools.map((s, i) => (
			<li key={i}>{s}</li>
		))}

		<h4>UI/UX Design</h4>
		{UI_and_UX.map((s, i) => (
			<li key={i}>{s}</li>
			))}
		</div>
	</div>
)
};
export default WebDev;