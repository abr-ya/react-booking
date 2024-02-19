import { FC } from "react";
import cn from "classnames";

import styles from "./Heading.module.css";
import { HeadingProps } from "./Heading.props";

const Heading: FC<HeadingProps> = ({ children, className, variant = "h1", ...props }) => {
  const allClasses = cn(className, styles.heading, styles[variant]);
  const Tag = variant;

  return (
    <Tag className={allClasses} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
