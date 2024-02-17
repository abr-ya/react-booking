import { FC } from "react";

import { PROP_TYPE_IMG_PATH } from "@/constants";

import styles from "./propertyTypeList.module.css";
import useFetch from "@/hooks/useFetch";
import { Loader } from "@/components";

const PropertyTypeList: FC = () => {
  const { data, loading } = useFetch("hotels/countByType");

  if (loading) return <Loader />;

  if (!data || !Array.isArray(data)) return <>...</>;

  return (
    <div className={styles.pList}>
      {data.map(({ type, imgSrc, count }) => (
        <div className={styles.pListItem} key={type}>
          <img src={`${PROP_TYPE_IMG_PATH}${imgSrc}`} alt={type} className={styles.pListImg} />
          <div className={styles.pListTitles}>
            <h1>{type}</h1>
            <h2>{count} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyTypeList;
