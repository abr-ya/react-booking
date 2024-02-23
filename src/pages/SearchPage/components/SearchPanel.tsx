import { useEffect, useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import { useLocation } from "react-router-dom";

import styles from "./search-panel.module.css";
import queryString from "query-string";
import { IGuestsCount } from "@/interfaces/form.interface";
import { useAppDispatch } from "@/app/store";
import { getHotels } from "@/app/hotel.slice";

const SearchPanel = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  console.log("queryParams", queryParams);

  useEffect(() => {
    dispatch(getHotels({}));
  }, []);

  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(queryParams?.destination || "");

  // todo: setter и использование!
  const [guests] = useState<IGuestsCount>({
    adult: queryParams?.adult ? Number(queryParams?.adult) : 1,
    children: queryParams?.children ? Number(queryParams?.children) : 1,
    room: queryParams?.room ? Number(queryParams?.room) : 1,
  });

  const dateHandler = (dates: RangeKeyDict) => {
    console.log(dates);
  };

  return (
    <div className={styles.listSearch}>
      <h1 className={styles.lsTitle}>Search</h1>
      <div className={styles.lsItem}>
        <label>Destination</label>
        <input placeholder={destination as string} type="text" onChange={(e) => setDestination(e.target.value)} />
      </div>
      <div className={styles.lsItem}>
        <label>Check-in Date</label>
        <span onClick={() => setOpenDate(!openDate)}>{`${queryParams?.startDate} to ${queryParams?.endDate}`}</span>
        {/* todo: add range={data} with format! */}
        {openDate && <DateRange onChange={dateHandler} minDate={new Date()} />}
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
            <input type="number" min={1} className={styles.lsOptionInput} defaultValue={guests.adult} />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>Children</span>
            <input type="number" min={0} className={styles.lsOptionInput} defaultValue={guests.children} />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>Room</span>
            <input type="number" min={1} className={styles.lsOptionInput} defaultValue={guests.room} />
          </div>
        </div>
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchPanel;
