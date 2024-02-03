import { Featured, FeaturedProperties, PropertyList } from "../../components";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Featured />
      <h1 className={styles.homeTitle}>Browse by property type</h1>
      <PropertyList />
      <h1 className={styles.homeTitle}>Homes guests love</h1>
      <FeaturedProperties />
      {/* todo: MailList */}
      <h3>todo: MailList</h3>
    </div>
  );
};

export default Home;
