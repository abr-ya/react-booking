import { Outlet, useLocation } from "react-router-dom";

import { Footer, Header, Navbar } from "../components";

import styles from "./layout.module.css";

const Layout = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div className={styles.layout}>
      <Navbar />
      <Header withSearch={pathname === "/"} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
