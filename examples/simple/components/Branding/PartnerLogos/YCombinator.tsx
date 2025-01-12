import Image from "next/image";

export default function YCLogo({
  className,
  hideText,
}: {
  className?: string;
  hideText?: boolean;
}) {
  return (
    <Image
      className={className}
      src={hideText ? "https://d1fyvnu4zf05pb.cloudfront.net/ycombinator-logo-notext.svg" : "https://d1fyvnu4zf05pb.cloudfront.net/ycombinator-logo.svg"}
      alt="Y Combinator"
      width={60}
      height={60}
    />
  );
}
