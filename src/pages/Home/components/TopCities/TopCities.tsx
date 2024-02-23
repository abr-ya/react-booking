import { FC } from "react";

// todo: move to API
import { topCities } from "@/data/topCities";

import styles from "./top-cities.module.css";
import useFetch from "@/hooks/useFetch";

const TopCities: FC = () => {
  const CITIES = topCities.map((item) => item.title.toLowerCase()).join();
  const { data, loading } = useFetch(`hotels/countByCity?cities=${CITIES}`);

  if (loading) return "Loading please wait..."; // todo: loader

  return (
    <div className={styles.featured}>
      {topCities.map(({ title, imgSrc }, i) => (
        <div className={styles.featuredItem} key={title}>
          <img src={imgSrc} alt={title} className={styles.featuredImg} />
          <div className={styles.featuredTitles}>
            <h1>{title}</h1>
            <h2>{data[i]} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopCities;
