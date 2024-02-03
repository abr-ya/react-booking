import { FC, useState } from "react";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IGuestsCount } from "../../interfaces";
import searchStyles from "./search.module.css";
import styles from "./guests.module.css";

interface IGuests {
  data: IGuestsCount;
  handler: (key: keyof IGuestsCount, isAdd?: boolean) => void;
}

const Guests: FC<IGuests> = ({ data: { adult, children, room }, handler }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={searchStyles.searchItem}>
      <FontAwesomeIcon icon={faPerson} className={searchStyles.searchIcon} />
      <span onClick={() => setIsOpen((prev) => !prev)} className={searchStyles.searchText}>
        {`${adult} adult · ${children} children · ${room} room`}
      </span>
      {isOpen && (
        <div className={styles.guests}>
          <div className={styles.guestItem}>
            <span className={styles.guestText}>Adult</span>
            <div className={styles.guestCounter}>
              <button disabled={adult <= 1} className={styles.changeBtn} onClick={() => handler("adult")}>
                -
              </button>
              <span>{adult}</span>
              <button className={styles.changeBtn} onClick={() => handler("adult", true)}>
                +
              </button>
            </div>
          </div>
          <div className={styles.guestItem}>
            <span className={styles.guestText}>Children</span>
            <div className={styles.guestCounter}>
              <button disabled={children <= 0} className={styles.changeBtn} onClick={() => handler("children")}>
                -
              </button>
              <span>{children}</span>
              <button className={styles.changeBtn} onClick={() => handler("children", true)}>
                +
              </button>
            </div>
          </div>
          <div className={styles.guestItem}>
            <span className={styles.guestText}>Room</span>
            <div className={styles.guestCounter}>
              <button disabled={room <= 1} className={styles.changeBtn} onClick={() => handler("room")}>
                -
              </button>
              <span>{room}</span>
              <button className={styles.changeBtn} onClick={() => handler("room", true)}>
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guests;
