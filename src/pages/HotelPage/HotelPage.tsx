import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./hotel-page.module.css";
import Slider from "./components/Slider";
import HotelDetails from "./components/HotelDetails";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/app/store";
import { getHotel } from "@/app/hotel.slice";
import { useEffect } from "react";

const HotelPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) dispatch(getHotel({ id }));
  }, []);
  // todo: Add loader

  return (
    <div className={styles.hotelContainer}>
      <div className={styles.hotelWrapper}>
        <button className={styles.bookNow}>Reserve or Book Now!</button>
        <h1 className={styles.hotelTitle}>Tower Street Apartments</h1>
        <div className={styles.hotelAddress}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>Elton St 125 New york</span>
        </div>
        <span className={styles.hotelDistance}>Excellent location – 500m from center</span>
        <span className={styles.hotelPriceHighlight}>
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <Slider />
        <HotelDetails />
      </div>
    </div>
  );
};

export default HotelPage;
