import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

export default function SkillsPage() {
  return (
    <PageTransition>
      <main className="page-shell">
        <PageHeader
          eyebrow="Skills"
          title="Technologies I work with"
          description="A practical stack built around full-stack product development, responsive interfaces and reliable backend systems."
        />

        <section className="skills-section section">
          <div className="container">
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <ScrollReveal key={skillGroup.category} as="div" delay={index * 80}>
                  <SkillCard title={skillGroup.category} items={skillGroup.items} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
