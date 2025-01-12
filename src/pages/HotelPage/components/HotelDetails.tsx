import { FC } from "react";
import styles from "./hotel-details.module.css";

interface IHotelDetails {
  cheapestPrice: number;
  desc: string;
  night: number;
  title: string;
}

const HotelDetails: FC<IHotelDetails> = ({ cheapestPrice, desc, night, title }) => (
  <div className={styles.hotelDetails}>
    <div className={styles.hotelDetailsTexts}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{desc}</p>
    </div>
    <div className={styles.hotelDetailsPrice}>
      <h1>Perfect for a {night}-night stay!</h1>
      <span>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</span>
      <h2>
        <b>${cheapestPrice * night}</b> ({night} nights)
      </h2>
      <button>Reserve or Book Now!</button>
    </div>
  </div>
);

export default HotelDetails;
