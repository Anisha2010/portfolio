import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ContactSection from '../sections/Contact';

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="page-shell">
        <PageHeader
          eyebrow="Contact"
          title="Let&apos;s build something together"
          description="Have an opportunity, project idea or just want to connect? Feel free to reach out."
        />
        <ContactSection />
      </main>
    </PageTransition>
  );
}
