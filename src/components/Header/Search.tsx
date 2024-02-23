import { useState } from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed } from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import styles from "./search.module.css";
import Guests from "./Guests";
import { IGuestsCount } from "@/interfaces/form.interface";
import { getToday } from "@/utils/dateHelper";
import { DatesPicker, IDateRange, IDatesPickerStyles } from "..";

const Search = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");

  // store datas as DD.MM.yyyy
  const [date, setDate] = useState<IDateRange>({ startDate: getToday(), endDate: getToday() });

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

  const datePickerStyles: IDatesPickerStyles = {
    main: styles.searchItem,
    icon: styles.searchIcon,
    span: styles.searchText,
    range: styles.date,
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
      <DatesPicker date={date} setDate={setDate} styles={datePickerStyles} />
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
