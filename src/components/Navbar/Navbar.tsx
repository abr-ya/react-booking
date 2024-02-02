import { FC } from "react";
import styles from "./navbar.module.css";

const Navbar: FC = () => (
  <div className={styles.navbar}>
    <div className={styles.navContainer}>
      <span className={styles.logo}>reactbooking</span>
      <div>
        <button className={styles.navButton}>Register</button>
        <button className={styles.navButton}>Login</button>
      </div>
    </div>
  </div>
);

export default Navbar;
