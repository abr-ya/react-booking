import { useState } from "react";
import { DateRange, Range } from "react-date-range";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { faBed, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import styles from "./search.module.css";
import Guests from "./Guests";
import { IGuestsCount } from "@/interfaces/form.interface";

const Search = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const [guests, setGuests] = useState<IGuestsCount>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const submitHandler = () => {
    navigate("/search", { state: { destination, date, guests } });
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
      <div className={styles.searchItem}>
        <FontAwesomeIcon icon={faCalendarDays} className={styles.searchIcon} />
        <span onClick={() => setOpenDate((prev) => !prev)} className={styles.searchText}>
          {`${format(date.startDate as Date, "MM/dd/yyyy")} to ${format(date.endDate as Date, "MM/dd/yyyy")}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate(item.selection)}
            moveRangeOnFirstSelection={false}
            ranges={[date]}
            className={styles.date}
            minDate={new Date()}
          />
        )}
      </div>
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
