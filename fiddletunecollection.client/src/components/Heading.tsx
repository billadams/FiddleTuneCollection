import type { JSX } from "react/jsx-runtime";
import styles from './Heading.module.css';

interface HeadingProps {
  text: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
  classNames?: string;
  }

function Heading({ text, headingLevel, classNames }: HeadingProps) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={`${classNames} ${styles.mainHeading}`}>{text}</Tag>
  );
}

export default Heading;