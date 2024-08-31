import { FC } from "react";
import styles from "./hotel-details.module.css";

interface IHotelDetails {
  desc: string;
}

const HotelDetails: FC<IHotelDetails> = ({ desc }) => (
  <div className={styles.hotelDetails}>
    <div className={styles.hotelDetailsTexts}>
      <h1 className={styles.title}>Stay in the heart of City</h1>
      <p className={styles.description}>{desc}</p>
    </div>
    <div className={styles.hotelDetailsPrice}>
      <h1>Perfect for a 9-night stay!</h1>
      <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
      <h2>
        <b>$945</b> (9 nights)
      </h2>
      <button>Reserve or Book Now!</button>
    </div>
  </div>
);

export default HotelDetails;
