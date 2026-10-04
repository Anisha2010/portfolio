import { useState } from 'react';
import SocialLinks from '../components/SocialLinks';
import ScrollReveal from '../components/ScrollReveal';
import { sendContactMessage } from '../services/contactService';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim()) nextErrors.email = 'Email is required.';
    else if (!emailPattern.test(form.email)) nextErrors.email = 'Use a valid email address.';
    if (!form.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!form.message.trim()) nextErrors.message = 'Message is required.';
    else if (form.message.trim().length < 20) nextErrors.message = 'Message should be at least 20 characters.';

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('sending');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container contact-grid">
        <ScrollReveal as="div" className="contact-copy" delay={80}>
          <p className="eyebrow accent">Let&apos;s talk</p>
          <h2>Let&apos;s build something together.</h2>
          <p>
            Have an opportunity, project idea or just want to connect? Feel free to reach out.
          </p>
          <div className="contact-mini-list">
            <p><strong>Email:</strong> anisha.daharwal@gmail.com</p>
            <p><strong>Focus:</strong> Full-stack web applications and real-world product builds</p>
          </div>
          <SocialLinks />
        </ScrollReveal>

        <ScrollReveal as="div" className="contact-card" delay={120}>
          <form onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <label>
                <span>Name</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} />
                {errors.name ? <small>{errors.name}</small> : null}
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Email</span>
                <input type="email" name="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} />
                {errors.email ? <small>{errors.email}</small> : null}
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Subject</span>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} aria-invalid={!!errors.subject} />
                {errors.subject ? <small>{errors.subject}</small> : null}
              </label>
            </div>

            <div className="field-row">
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" value={form.message} onChange={handleChange} aria-invalid={!!errors.message} />
                {errors.message ? <small>{errors.message}</small> : null}
              </label>
            </div>

            <button type="submit" className="btn btn-primary full-width" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' ? <p className="form-status success">Message sent successfully.</p> : null}
            {status === 'error' && Object.keys(errors).length === 0 ? (
              <p className="form-status error">Unable to send message. Please try again.</p>
            ) : null}
            {status === 'error' && Object.keys(errors).length > 0 ? (
              <p className="form-status error">Please fix the highlighted fields.</p>
            ) : null}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
