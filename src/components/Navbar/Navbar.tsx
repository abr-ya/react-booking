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
        <Link to={"/register"}>
          <button className={styles.navButton}>Register</button>
        </Link>
        <Link to={"/login"}>
          <button className={styles.navButton}>Login</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Navbar;
