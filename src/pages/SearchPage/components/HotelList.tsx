import HotelCard from "./HotelCard";
import styles from "../search-page.module.css";
import { useAppSelector } from "@/app/store";
import { Loader } from "@/components";

const HotelList = () => {
  const { list, hotelLoading } = useAppSelector((state) => state.hotel);

  if (hotelLoading) return <Loader />;

  return (
    <div className={styles.hotelList}>
      {list.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </div>
  );
};

export default HotelList;
