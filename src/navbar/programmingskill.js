import data from "../data/data.json"; // adjust path to the component's locatio

const ProgrammingSkill = () => {
const theSkills = data?.skills?.programmingLanguages ?? [];

if (theSkills.length === 0) return <p>No programming skills available.</p>;
return (
<div>
<h2>Programming Skills</h2>
<ul>
{theSkills.map((s, i) => (
<li key={i}>{s}</li>
))}
</ul>
</div>
);
};

export default ProgrammingSkill;
