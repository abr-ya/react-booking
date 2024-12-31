import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { getHotel } from "@/app/hotel.slice";
import { ReserveModal } from "@/components";

import styles from "./hotel-page.module.css";
import Slider from "./components/Slider";
import HotelDetails from "./components/HotelDetails";

const HotelPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { detail, hotelLoading } = useAppSelector((state) => state.hotel);
  const searchData = useAppSelector((state) => state.search);
  const { daysDiff } = searchData;

  const [openReserveModal, setOpenReserveModal] = useState(false);

  useEffect(() => {
    if (id) dispatch(getHotel({ id }));
  }, []);

  if (!detail || hotelLoading) return <>... loading / error ...</>;

  const { address, cheapestPrice, desc, distance, name, rooms, photos } = detail;

  const reserveButtonHandler = () => {
    // todo: add login check!
    setOpenReserveModal(true);
  };

  return (
    <>
      {openReserveModal && (
        <ReserveModal closeModal={() => setOpenReserveModal(false)} hotelId={id} data={rooms} search={searchData} />
      )}
      <div className={styles.hotelContainer}>
        <div className={styles.hotelWrapper}>
          <button className={styles.bookNow} onClick={reserveButtonHandler}>
            Reserve Now!
          </button>
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
          <HotelDetails desc={desc} cheapestPrice={cheapestPrice} night={daysDiff || 0} />
        </div>
      </div>
    </>
  );
};

export default HotelPage;
