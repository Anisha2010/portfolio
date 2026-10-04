export default function Button({ children, variant = 'primary', className = '', as = 'button', href, ...props }) {
  const classes = `btn btn-${variant} ${className}`.trim();

  if (as === 'a' && href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
