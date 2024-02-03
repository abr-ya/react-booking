import Menu from "./Menu";
import Search from "./Search";
import styles from "./header.module.css";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.headerContainer}>
      <Menu />
      <h1 className={styles.headerTitle}>A lifetime of discounts? It's Genius.</h1>
      <p className={styles.headerDesc}>
        Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
      </p>
      <button className={styles.headerBtn}>Sign in / Register</button>
      <Search />
    </div>
  </div>
);

export default Header;
