import { FC } from "react";
import cn from "classnames";

import Menu from "./Menu";
import Search from "./Search";
import styles from "./header.module.css";

interface IHeader {
  withSearch: boolean;
}

const Header: FC<IHeader> = ({ withSearch }) => (
  <div className={styles.header}>
    <div className={cn(styles.headerContainer, { [styles.full]: withSearch })}>
      <Menu />
      {withSearch && (
        <>
          <h1 className={styles.headerTitle}>A lifetime of discounts? It's Genius.</h1>
          <p className={styles.headerDesc}>
            Get rewarded for your travels – unlock instant savings of 10% or more with a free Reactbooking account
          </p>
          <button className={styles.headerBtn}>Sign in / Register</button>
          <Search />
        </>
      )}
    </div>
  </div>
);

export default Header;
