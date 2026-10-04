export default function SectionHeading({ eyebrow, title, align = 'center' }) {
  return (
    <div className="section-heading" style={{ textAlign: align }}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}
