import "../styles/Skills.scss";
import logoHtml from "../assets/html-5.webp";
import logoCss from "../assets/css-3.webp";
import logoSass from "../assets/sass.webp";
import logoJs from "../assets/js.webp";
import logoReact from "../assets/atom.webp";
import logoGit from "../assets/git.webp";
import logoGithub from "../assets/github.webp";
import logoFigma from "../assets/figma.webp";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", img: logoHtml },
      { name: "CSS", img: logoCss },
      { name: "Sass", img: logoSass },
      { name: "JavaScript", img: logoJs },
      { name: "React.js", img: logoReact },
    ],
  },
  {
    category: "Outils & Autres",
    technologies: [
      { name: "Git", img: logoGit },
      { name: "GitHub", img: logoGithub },
      { name: "Figma", img: logoFigma },
    ],
  },
];

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-title">Compétences Techniques</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{skill.category}</h3>
            <div className="skill-list">
              {skill.technologies.map((tech, idx) => (
                <div key={idx} className="skill-card">
                  <div className="skill-icon">
                    <img src={tech.img} alt={tech.name} />
                  </div>
                  <span className="skill-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
