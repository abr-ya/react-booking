import { FC } from "react";

import { IMG_BASE_PATH2 } from "../../constants";
import { propertyList } from "../../data/propertyList";

import styles from "./propertyList.module.css";

const PropertyList: FC = () => (
  <div className={styles.pList}>
    {propertyList.map((feat) => (
      <div className={styles.pListItem}>
        <img src={`${IMG_BASE_PATH2}${feat.imgSrc}`} alt={feat.title} className={styles.pListImg} />
        <div className={styles.pListTitles}>
          <h1>{feat.title}</h1>
          <h2>{feat.count} properties</h2>
        </div>
      </div>
    ))}
  </div>
);

export default PropertyList;
