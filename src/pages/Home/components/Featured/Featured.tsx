import { FC } from "react";

import { featuredData } from "@/data/featured";
import { IMG_BASE_PATH1 } from "@/constants";

import styles from "./featured.module.css";

const Featured: FC = () => (
  <div className={styles.featured}>
    {featuredData.map((feat) => (
      <div className={styles.featuredItem}>
        <img src={`${IMG_BASE_PATH1}${feat.imgSrc}`} alt={feat.title} className={styles.featuredImg} />
        <div className={styles.featuredTitles}>
          <h1>{feat.title}</h1>
          <h2>{feat.count} properties</h2>
        </div>
      </div>
    ))}
  </div>
);

export default Featured;
