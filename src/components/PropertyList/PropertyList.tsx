import { FC } from "react";

import { IMG_BASE_PATH2 } from "../../constants";
import { propertyList } from "../../data/propertyList";

import styles from "./propertyList.module.css";

const PropertyList: FC = () => (
  <div className={styles.pList}>
    {propertyList.map(({ title, imgSrc, count }) => (
      <div className={styles.pListItem} key={title}>
        <img src={`${IMG_BASE_PATH2}${imgSrc}`} alt={title} className={styles.pListImg} />
        <div className={styles.pListTitles}>
          <h1>{title}</h1>
          <h2>{count} properties</h2>
        </div>
      </div>
    ))}
  </div>
);

export default PropertyList;
