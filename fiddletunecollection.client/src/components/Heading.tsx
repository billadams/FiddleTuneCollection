import type { JSX } from "react/jsx-runtime";

interface HeadingProps {
  text: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  classNames?: string;
  }

function Heading({ text, headingLevel, classNames }: HeadingProps) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={classNames}>{text}</Tag>
  );
}

export default Heading;