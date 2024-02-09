import styles from "./hotel-card.module.css";

const HotelCard = () => (
  <div className={styles.hotelCard}>
    <img
      src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      alt=""
      className={styles.hotelImg}
    />
    <div className={styles.hotelDesc}>
      <h1 className={styles.hotelTitle}>Tower Street Apartments</h1>
      <span className={styles.hotelDistance}>500m from center</span>
      <span className={styles.hotelTaxiOp}>Free airport taxi</span>
      <span className={styles.hotelSubtitle}>Studio Apartment with Air conditioning</span>
      <span className={styles.hotelFeatures}>Entire studio • 1 bathroom • 21m² 1 full bed</span>
      <span className={styles.hotelCancelOp}>Free cancellation </span>
      <span className={styles.hotelCancelOpSubtitle}>You can cancel later, so lock in this great price today!</span>
    </div>
    <div className={styles.hotelDetails}>
      <div className={styles.hotelRating}>
        <span>Excellent</span>
        <button>8.9</button>
      </div>
      <div className={styles.hotelDetailTexts}>
        <span className={styles.hotelPrice}>$112</span>
        <span className={styles.hotelTaxOp}>Includes taxes and fees</span>
        <button className={styles.checkButton}>See availability</button>
      </div>
    </div>
  </div>
);

export default HotelCard;
