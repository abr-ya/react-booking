import { FC } from "react";

import { featuredProperties } from "@/data/featuredProperties";

import styles from "./featuredProperties.module.css";

const FeaturedProperties: FC = () => (
  <div className={styles.fp}>
    {featuredProperties.map(({ title, imgSrc, city, price, rating }) => (
      <div className={styles.fpItem} key={title}>
        <img src={imgSrc} alt={title} className={styles.fpImg} />
        <span className={styles.fpName}>{title}</span>
        <span className={styles.fpCity}>{city}</span>
        <span className={styles.fpPrice}>Starting from ${price}</span>
        <div className={styles.fpRating}>
          <button>{rating}</button>
          <span>Excellent</span>
        </div>
      </div>
    ))}
  </div>
);

export default FeaturedProperties;
