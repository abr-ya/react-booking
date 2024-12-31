import { useAppSelector } from "@/app/store";

import styles from "./home.module.css";

const AdminHome = () => {
  const { isAdmin } = useAppSelector((state) => state.user);

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Admin Home Page</h1>
      <p>{isAdmin ? "Hello, Admin!" : "Sorry, you are not admin!"}</p>
    </div>
  );
};

export default AdminHome;
