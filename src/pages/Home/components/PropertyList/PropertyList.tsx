import { FC } from "react";

import { propertyList } from "@/data/propertyList";
import { IMG_BASE_PATH2 } from "@/constants";

import styles from "./propertyList.module.css";
import useFetch from "@/hooks/useFetch";
import { Loader } from "@/components";

const PropertyList: FC = () => {
  const { data, loading } = useFetch("hotels/countByType");

  if (loading) return <Loader />;

  if (!data || !Array.isArray(data)) return <>...</>;

  const newData = data.map((el, index) => ({ ...propertyList[index], ...el }));

  return (
    <div className={styles.pList}>
      {newData.map(({ type, imgSrc, count }) => (
        <div className={styles.pListItem} key={type}>
          <img src={`${IMG_BASE_PATH2}${imgSrc}`} alt={type} className={styles.pListImg} />
          <div className={styles.pListTitles}>
            <h1>{type}</h1>
            <h2>{count} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
