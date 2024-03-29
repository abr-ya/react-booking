import { FeaturedProperties, MailList, PropertyTypeList, TopCities } from "./components";
import styles from "./home.module.css";

const Home = () => (
  <div className={styles.homeContainer}>
    <TopCities />
    <h1 className={styles.homeTitle}>Browse by property type</h1>
    <PropertyTypeList />
    <h1 className={styles.homeTitle}>Homes guests love</h1>
    <FeaturedProperties />
    <MailList />
  </div>
);

export default Home;
