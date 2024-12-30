import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./reserve.module.css";
import { IRoom } from "@/interfaces/room.interface";

interface IReserveModal {
  closeModal: () => void;
  data: IRoom[];
  hotelId?: string;
}

const ReserveModal: FC<IReserveModal> = ({ closeModal, data }) => {
  console.log("Rooms:", data);

  const isRoomAvailable = () => {
    // todo date checking! roomNumber: IRoomNumber
    const isFoundBookings = false;

    return !isFoundBookings;
  };

  const handleRoomClick = (e: { target: HTMLInputElement }) => {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log(checked, value);
  };

  const handleReserveClick = async () => {
    console.log("Reserve Now click");
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
                    disabled={!isRoomAvailable()}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleReserveClick} className={styles.button}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default ReserveModal;
