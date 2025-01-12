export default function SvgComponent({
  className,
  ...props
}: {
  className?: string;
}) {
  return (
    <svg
      width={301}
      height={339}
      viewBox="0 0 301 339"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <title>Logo</title>
      <circle cx="251" cy="50" r="50" fill="#7AAEED" />
      <circle cx="50" cy="289" r="50" fill="#7AAEED" />
      <circle cx="50" cy="50" r="50" fill="#7AAEED" />
      <circle cx="251" cy="289" r="50" fill="#7AAEED" />
      <rect
        x="15"
        y="84.2363"
        width="98.2386"
        height="302.037"
        transform="rotate(-40 15 84.2363)"
        fill="#7AAEED"
      />
    </svg>
  );
}
