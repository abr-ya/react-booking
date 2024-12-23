import { FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/store";
import { userLogout } from "@/app/user.slice";

import styles from "./navbar.module.css";

const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  const {
    details: { username },
  } = useAppSelector((state) => state.user);

  const logoutHandler = () => dispatch(userLogout());

  const renderButtons = (name: string) =>
    name ? (
      <>
        <div>Hello, {name}!)</div>
        <button className={styles.navButton} onClick={logoutHandler}>
          Logout
        </button>
      </>
    ) : (
      <>
        <Link to={"/register"}>
          <button className={styles.navButton}>Register</button>
        </Link>
        <Link to={"/login"}>
          <button className={styles.navButton}>Login</button>
        </Link>
      </>
    );

  return (
    <div className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to={"/"} className={styles.logo}>
          reactbooking
        </Link>
        <div className={styles.userButtons}>{renderButtons(username)}</div>
      </div>
    </div>
  );
};

export default Navbar;
