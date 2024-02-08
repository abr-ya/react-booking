import { FC } from "react";
import styles from "./maillist.module.css";

const MailList: FC = () => (
  <div className={styles.mail}>
    <h1>Save time, save money!</h1>
    <span>Sign up and we'll send the best deals to you</span>
    <div className={styles.mailInputContainer}>
      <input type="text" placeholder="Your Email" />
      <button>Subscribe</button>
    </div>
  </div>
);

export default MailList;
