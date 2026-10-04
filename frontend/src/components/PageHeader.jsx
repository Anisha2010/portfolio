export default function PageHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className="page-hero section">
      <div className="container narrow">
        {eyebrow ? <p className="eyebrow accent" style={{ textAlign: align }}>{eyebrow}</p> : null}
        <div className="section-heading" style={{ textAlign: align }}>
          <h2>{title}</h2>
        </div>
        {description ? <p className="page-intro">{description}</p> : null}
      </div>
    </div>
  );
}
