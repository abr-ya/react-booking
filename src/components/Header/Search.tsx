import { useState } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import styles from "./search.module.css";
import Guests from "./Guests";
import { IGuestsCount } from "@/interfaces/form.interface";
import DatesPicker, { IDateRange } from "./DatesPicker";
import { DATE_FORMAT } from "@/constants";

const Search = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");

  const today = moment().format(DATE_FORMAT);

  // store data as DD.MM.yyyy
  const [date, setDate] = useState<IDateRange>({ startDate: today, endDate: today });

  const [guests, setGuests] = useState<IGuestsCount>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const submitHandler = () => {
    const searchParams = queryString.stringify({ destination, ...date, ...guests });
    navigate({
      pathname: "/search",
      search: `?${searchParams}`,
    });
  };

  const guestsHandler = (key: keyof IGuestsCount, isAdd?: boolean) => {
    setGuests((prev) => ({ ...prev, [key]: isAdd ? prev[key] + 1 : prev[key] - 1 }));
  };

  return (
    <div className={styles.search}>
      {/* Place */}
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faBed} className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Where are you going?"
          className={styles.searchInput}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      {/* Dates */}
      <DatesPicker date={date} setDate={setDate} />
      {/* Person */}
      <Guests data={guests} handler={guestsHandler} />
      <div className={styles.searchItem}>
        <button className={styles.searchBtn} onClick={submitHandler}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
