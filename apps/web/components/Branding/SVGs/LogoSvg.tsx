export default function SvgComponent({
    className,
    ...props
  }: {
    className?: string;
  }) {
    return (
      <svg
        width={150}
        height={245}
        viewBox="0 0 150 245"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <title>Nerve</title>
        <rect width="150" height="38" transform="translate(0 13)" />
        <path d="M150 13H0V51H150V13Z" />
        <rect width="50" height="50" transform="translate(100 194.333)" />
        {/*<ellipse cx="125" cy="219.333" rx="25" ry="25" />*/}
        <rect width="150" height="50" transform="translate(0 94.3333)" />
        <path d="M150 94.3333H0V144.333H150V94.3333Z" />
        <rect
          width="150"
          height="50"
          transform="translate(50 94.3333) rotate(90)"
        />
        <path d="M50 244.333L50 94.3333L2.28882e-05 94.3332L1.63315e-05 244.333L50 244.333Z" />
        <path d="M50 13L50 1L2.28882e-05 0.999998L2.23636e-05 13L50 13Z" />
        <path d="M150 13L150 1L100 0.999998L100 13L150 13Z" />
      </svg>
    );
  }