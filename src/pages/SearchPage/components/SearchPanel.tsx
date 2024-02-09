import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";

import styles from "./search-panel.module.css";

const SearchPanel = () => {
  const { state } = useLocation();

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(state.destination);
  const [date, setDate] = useState(state.date);
  const [guests] = useState(state.guests); // todo: setter и использование!

  return (
    <div className={styles.listSearch}>
      <h1 className={styles.lsTitle}>Search</h1>
      <div className={styles.lsItem}>
        <label>Destination</label>
        <input placeholder={destination} type="text" onChange={(e) => setDestination(e.target.value)} />
      </div>
      <div className={styles.lsItem}>
        <label>Check-in Date</label>
        <span onClick={() => setOpenDate(!openDate)}>
          {`${format(date.startDate, "MM/dd/yyyy")} to ${format(date.endDate, "MM/dd/yyyy")}`}
        </span>
        {openDate && <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} />}
      </div>
      <div className={styles.lsItem}>
        <label>Options</label>
        <div className={styles.lsOptions}>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>
              Min price <small>per night</small>
            </span>
            <input type="number" className={styles.lsOptionInput} />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>
              Max price <small>per night</small>
            </span>
            <input type="number" className={styles.lsOptionInput} />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>Adult</span>
            <input type="number" min={1} className={styles.lsOptionInput} placeholder={guests.adult} />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>Children</span>
            <input type="number" min={0} className={styles.lsOptionInput} placeholder={guests.children} />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>Room</span>
            <input type="number" min={1} className={styles.lsOptionInput} placeholder={guests.room} />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPanel;
