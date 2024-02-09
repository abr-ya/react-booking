import HotelList from "./components/HotelList";
import SearchPanel from "./components/SearchPanel";
import styles from "./search-page.module.css";

const SearchPage = () => (
  <div className={styles.listContainer}>
    <div className={styles.listWrapper}>
      <SearchPanel />
      <HotelList />
    </div>
  </div>
);

export default SearchPage;
