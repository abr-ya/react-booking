import { FC } from "react";

import { featuredData } from "@/data/featured";
import { IMG_BASE_PATH1 } from "@/constants";

import styles from "./featured.module.css";
import useFetch from "@/hooks/useFetch";

const Featured: FC = () => {
  const CITIES = featuredData.map((item) => item.title.toLowerCase()).join();
  const { data, loading } = useFetch(`hotels/countByCity?cities=${CITIES}`);

  if (loading) return "Loading please wait..."; // todo: loader

  return (
    <div className={styles.featured}>
      {featuredData.map(({ title, imgSrc }, i) => (
        <div className={styles.featuredItem} key={title}>
          <img src={`${IMG_BASE_PATH1}${imgSrc}`} alt={title} className={styles.featuredImg} />
          <div className={styles.featuredTitles}>
            <h1>{title}</h1>
            <h2>{data[i]} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
