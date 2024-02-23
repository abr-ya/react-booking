import { FC } from "react";

import useFetch from "@/hooks/useFetch";

import styles from "./featuredProperties.module.css";
import { Loader } from "@/components";

const FeaturedProperties: FC = () => {
  const { data, loading } = useFetch("hotels?featured=true&limit=4");

  if (loading) return <Loader />;

  if (!data || !Array.isArray(data)) return <>...</>;

  return (
    <div className={styles.fp}>
      {data.map(({ name, photos, city, cheapestPrice, rating }) => (
        <div className={styles.fpItem} key={name}>
          <img src={photos[0]} alt={name} className={styles.fpImg} />
          <span className={styles.fpName}>{name}</span>
          <span className={styles.fpCity}>{city}</span>
          <span className={styles.fpPrice}>Starting from ${cheapestPrice}</span>
          <div className={styles.fpRating}>
            <button>{rating}</button>
            <span>Excellent</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
