import { DateRange, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import styles from "./search.module.css";
import { FC, useState } from "react";
import { createRange } from "@/utils/dateHelper";

export interface IDateRange {
  startDate: string;
  endDate: string;
}

interface IDates {
  date: IDateRange;
  setDate: (date: IDateRange) => void;
}

const DatesPicker: FC<IDates> = ({ date, setDate }) => {
  const [openDate, setOpenDate] = useState(false);

  const dateHandler = (dates: RangeKeyDict) => {
    // console.log(dates); // dates as Date!
    setDate({
      startDate: format(dates.selection.startDate as Date, "dd.MM.yyyy"),
      endDate: format(dates.selection.endDate as Date, "dd.MM.yyyy"),
    });
  };

  return (
    <div className={styles.searchItem}>
      <FontAwesomeIcon icon={faCalendarDays} className={styles.searchIcon} />
      <span onClick={() => setOpenDate((prev) => !prev)} className={styles.searchText}>
        {`${date.startDate} to ${date.endDate}`}
      </span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={dateHandler}
          moveRangeOnFirstSelection={false}
          ranges={[createRange(date.startDate, date.endDate)]}
          className={styles.date}
          minDate={new Date()}
        />
      )}
    </div>
  );
};

export default DatesPicker;
