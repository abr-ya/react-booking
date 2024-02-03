import { Outlet } from "react-router-dom";

import { Header, Navbar } from "../components";

import styles from "./layout.module.css";

const Layout = () => (
  <div className={styles.layout}>
    <Navbar />
    <Header />
    <Outlet />
  </div>
);

export default Layout;
