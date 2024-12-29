import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./reserve.module.css";

interface IReserveModal {
  closeModal: () => void;
  hotelId?: string;
}

const ReserveModal: FC<IReserveModal> = ({ closeModal }) => {
  const handleClick = async () => {
    console.log("Reserve Now click");
  };

  return (
    <div className={styles.reserve}>
      <div className={styles.rContainer}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.rClose} onClick={() => closeModal()} />
        <span>Select your rooms:</span>
        todo: Map and Show Hotel Rooms!
        <button onClick={handleClick} className={styles.button}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default ReserveModal;
