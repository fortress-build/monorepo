export default function YCLogo({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="100%"
      height="100%"
      style={{ maxWidth: '24px', maxHeight: '24px' }}
    >
      <path d="M0 0h32v32H0z" fill="#f26625" />
      <path
        d="M14.933 18.133L9.387 7.787h2.56l3.2 6.507c0 .107.107.213.213.32s.107.213.213.427l.107.107v.107c.107.213.107.32.213.533.107.107.107.32.213.427.107-.32.32-.533.427-.96.107-.32.32-.64.533-.96l3.2-6.507h2.347L17.067 18.24v6.613h-2.133z"
        fill="#fff"
      />
    </svg>
  );
}
