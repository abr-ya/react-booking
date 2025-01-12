import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import axios from "@/api/axios";
import { baseUrl } from "@/api/api";
import { IRoom, IRoomNumber } from "@/interfaces/room.interface";
import { ISearcState } from "@/app/search.slice";
import { getTimestampsFromRange } from "@/utils/dateHelper";

import styles from "./reserve.module.css";

interface IReserveModal {
  closeModal: () => void;
  data: IRoom[];
  hotelId?: string;
  search: ISearcState;
}

const ReserveModal: FC<IReserveModal> = ({ closeModal, data, search: { date1start, date2end } }) => {
  const [selectedRoomsIDs, setSelectedRoomsIDs] = useState<string[]>([]);
  console.log("Rooms:", data);

  const userDatesList = getTimestampsFromRange(date1start, date2end);
  console.log(userDatesList);

  const isRoomAvailable = (roomNumber: IRoomNumber) => {
    const hasBookings = roomNumber.bookedDates.some((date) => userDatesList.includes(new Date(date).getTime()));

    return !hasBookings;
  };

  const handleRoomClick = (e: { target: HTMLInputElement }) => {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log(checked, value);
    setSelectedRoomsIDs((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };

  const handleReserveClick = async (rooms: string[]) => {
    console.log("Reserve Now click");
    try {
      const res = await Promise.all(
        rooms.map((roomId) => axios.put(`${baseUrl}rooms/booking/${roomId}`, { dates: userDatesList })),
      );
      console.log("Booking finished!", res); // todo: Result message, Refresh or Navigate
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.reserve}>
      <div className={styles.container}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.close} onClick={() => closeModal()} />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className={styles.item} key={item._id}>
            <div className={styles.itemInfo}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.desc}>{item.desc}</div>
              <div className={styles.max}>
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className={styles.price}>{item.price}</div>
            </div>
            <div className={styles.selectRooms}>
              {item.roomNumbers.map((roomNumber) => (
                <div className={styles.room} key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleRoomClick}
                    disabled={!isRoomAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={() => handleReserveClick(selectedRoomsIDs)} className={styles.button}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default ReserveModal;
