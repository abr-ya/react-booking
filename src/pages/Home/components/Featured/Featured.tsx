import { FC } from "react";

import { featuredData } from "@/data/featured";
import { IMG_BASE_PATH1 } from "@/constants";

import styles from "./featured.module.css";
import useFetch from "@/hooks/useFetch";

const Featured: FC = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { data, loading } = useFetch(`${API_URL}hotels/`); // countByCity?cities=milan,vilnius,prague

  if (loading) return "Loading please wait..."; // todo: loader

  console.log(data);

  return (
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
};

export default Featured;
