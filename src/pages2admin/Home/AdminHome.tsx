import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { getHotels } from "@/app/hotel.slice";

import styles from "./home.module.css";
import HotelItem from "./components/HotelItem";

const AdminHome = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getHotels({}));
  }, []);
  const { isAdmin } = useAppSelector((state) => state.user);
  const { list } = useAppSelector((state) => state.hotel);

  const createButtonHandler = () => {
    navigate("/admin/createhotel");
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Admin Home Page</h1>
      <p>{isAdmin ? "Hello, Admin! Our hotels list:" : "Sorry, you are not admin!"}</p>
      {isAdmin ? (
        <>
          <ul>
            {list.map((hotel) => (
              <HotelItem data={hotel} />
            ))}
          </ul>
          <button onClick={createButtonHandler}>Create New Hotel</button>
        </>
      ) : null}
    </div>
  );
};

export default AdminHome;
