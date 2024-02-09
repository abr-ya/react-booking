import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";

const Navbar: FC = () => (
  <div className={styles.navbar}>
    <div className={styles.navContainer}>
      <Link to={"/"} className={styles.logo}>
        reactbooking
      </Link>
      <div>
        <button className={styles.navButton}>Register</button>
        <button className={styles.navButton}>Login</button>
      </div>
    </div>
  </div>
);

export default Navbar;
