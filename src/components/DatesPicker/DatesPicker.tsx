import { FC, useState } from "react";
import { DateRange, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import { createRange } from "@/utils/dateHelper";

export interface IDateRange {
  startDate: string;
  endDate: string;
}

export interface IDatesPickerStyles {
  main: string;
  icon: string;
  span: string;
  range: string;
}

interface IDates {
  date: IDateRange;
  setDate: (date: IDateRange) => void;
  styles: IDatesPickerStyles;
}

const DatesPicker: FC<IDates> = ({ date, setDate, styles }) => {
  const [openDate, setOpenDate] = useState(false);

  const dateHandler = (dates: RangeKeyDict) => {
    setDate({
      startDate: format(dates.selection.startDate as Date, "dd.MM.yyyy"),
      endDate: format(dates.selection.endDate as Date, "dd.MM.yyyy"),
    });
  };

  return (
    <div className={styles.main}>
      <FontAwesomeIcon icon={faCalendarDays} className={styles.icon} />
      <span onClick={() => setOpenDate((prev) => !prev)} className={styles.span}>
        {`${date.startDate} to ${date.endDate}`}
      </span>
      {openDate && (
        <DateRange
          editableDateInputs={true}
          onChange={dateHandler}
          moveRangeOnFirstSelection={false}
          ranges={[createRange(date.startDate, date.endDate)]}
          className={styles.range}
          minDate={new Date()}
        />
      )}
    </div>
  );
};

export default DatesPicker;
