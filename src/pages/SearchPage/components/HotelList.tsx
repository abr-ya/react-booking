import HotelCard from "./HotelCard";
import styles from "../search-page.module.css";

const HotelList = () => (
  <div className={styles.hotelList}>
    {/* todo: add data! */}
    <HotelCard />
    <HotelCard />
    <HotelCard />
  </div>
);

export default HotelList;
