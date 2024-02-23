import { FC } from "react";
import { IHotel } from "@/interfaces/hotel.interface";
import styles from "./hotel-card.module.css";
import defImage from "/no_photo.jpg";
import { Link } from "react-router-dom";

interface IHotelCard {
  hotel: IHotel;
}

const HotelCard: FC<IHotelCard> = ({ hotel: { id, name, distance, photos, title, desc, cheapestPrice, rating } }) => (
  <div className={styles.hotelCard}>
    {photos[0] ? (
      <img src={photos[0]} alt={name} className={styles.hotelImg} />
    ) : (
      <img src={defImage} className={styles.hotelImg} alt="noImage" />
    )}

    <div className={styles.hotelDesc}>
      <h1 className={styles.hotelTitle}>{name}</h1>
      <span className={styles.hotelDistance}>{distance}m from center</span>
      <span className={styles.hotelTaxiOp}>Free airport taxi</span>
      <span className={styles.hotelSubtitle}>{title}</span>
      <span className={styles.hotelFeatures}>{desc}</span>
      <span className={styles.hotelCancelOp}>Free cancellation </span>
      <span className={styles.hotelCancelOpSubtitle}>You can cancel later, so lock in this great price today!</span>
    </div>
    <div className={styles.hotelDetails}>
      <div className={styles.hotelRating}>
        {rating ? (
          <>
            <span>Excellent</span>
            <button>{rating}</button>
          </>
        ) : (
          <span>Not Rated yet</span>
        )}
      </div>
      <div className={styles.hotelDetailTexts}>
        <span className={styles.hotelPrice}>${cheapestPrice}</span>
        <span className={styles.hotelTaxOp}>Includes taxes and fees</span>
        <Link to={`/hotel/${id}`}>
          <button className={styles.checkButton}>See availability</button>
        </Link>
      </div>
    </div>
  </div>
);

export default HotelCard;
