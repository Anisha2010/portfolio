import { skills } from '../data/skills';
import SkillCard from '../components/SkillCard';
import SectionHeading from '../components/SectionHeading';

export default function Skills() {
  return (
    <section className="skills-section section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="Tech Stack" title="Skills & tools I work with" align="center" />

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={skillGroup.category} className="reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <SkillCard title={skillGroup.category} items={skillGroup.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
