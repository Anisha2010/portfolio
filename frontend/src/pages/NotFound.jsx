import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main className="page-shell not-found-page">
      <div className="container small-center section">
        <h1>404</h1>
        <h2>Page not found.</h2>
        <p>The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
