import { faBed, faCar, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.css";

const Menu = () => (
  <div className={styles.menuList}>
    <div className={`${styles.menuListItem} ${styles.active}`}>
      <FontAwesomeIcon icon={faBed} />
      <span>Stays</span>
    </div>
    <div className={styles.menuListItem}>
      <FontAwesomeIcon icon={faPlane} />
      <span>Flights</span>
    </div>
    <div className={styles.menuListItem}>
      <FontAwesomeIcon icon={faCar} />
      <span>Car rentals</span>
    </div>
    <div className={styles.menuListItem}>
      <FontAwesomeIcon icon={faBed} />
      <span>Attractions</span>
    </div>
    <div className={styles.menuListItem}>
      <FontAwesomeIcon icon={faTaxi} />
      <span>Airport taxis</span>
    </div>
  </div>
);

export default Menu;
