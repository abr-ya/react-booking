import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { getHotel } from "@/app/hotel.slice";

import styles from "./hotel-page.module.css";
import Slider from "./components/Slider";
import HotelDetails from "./components/HotelDetails";

const HotelPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { detail, hotelLoading } = useAppSelector((state) => state.hotel);

  useEffect(() => {
    if (id) dispatch(getHotel({ id }));
  }, []);

  if (!detail || hotelLoading) return <>... loading / error ...</>;

  const { address, cheapestPrice, desc, distance, name, photos } = detail;

  return (
    <div className={styles.hotelContainer}>
      <div className={styles.hotelWrapper}>
        <button className={styles.bookNow}>Reserve or Book Now!</button>
        <h1 className={styles.hotelTitle}>{name}</h1>
        <div className={styles.hotelAddress}>
          <FontAwesomeIcon icon={faLocationDot} />
          <span>{address}</span>
        </div>
        <span className={styles.hotelDistance}>Excellent location – {distance}m from center</span>
        <span className={styles.hotelPriceHighlight}>
          Book a stay over ${cheapestPrice} at this property and get a free airport taxi
        </span>
        <Slider photos={photos} />
        <HotelDetails desc={desc} />
      </div>
    </div>
  );
};

export default HotelPage;
