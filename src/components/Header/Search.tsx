import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./search.module.css";
import { faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [destination, setDestination] = useState("");

  const handleSearch = () => console.log(destination);

  return (
    <div className={styles.search}>
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faBed} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Where are you going?"
          className={styles.searchInput}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faCalendarDays} className={styles.searchIcon} />
        {/* DateRange */}
      </div>
      {/* Person */}
      <div className={styles.searchItem}>
        <button className={styles.searchBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
