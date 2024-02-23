import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./search-panel.module.css";
import queryString from "query-string";
import { IGuestsCount } from "@/interfaces/form.interface";
import { useAppDispatch } from "@/app/store";
import { getHotels } from "@/app/hotel.slice";
import { IHotelSearchParams } from "@/interfaces/hotel.interface";
import { getToday } from "@/utils/dateHelper";
import { DatesPicker, IDateRange, IDatesPickerStyles } from "@/components";

const SearchPanel = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = queryString.parse(location.search);
  console.log("queryParams", queryParams);
  const { destination: city, min: qMin, max: qMax } = queryParams;

  const searchParams: IHotelSearchParams = {};

  // getHotels if queryParams was changed == button Search
  useEffect(() => {
    if (city) searchParams.city = city as string;
    if (qMin && qMax) {
      searchParams.min = qMin as string;
      searchParams.max = qMax as string;
    }

    dispatch(getHotels(searchParams));
  }, [city, qMin, qMax]);

  const [destination, setDestination] = useState(queryParams?.destination || "");

  // store datas as DD.MM.yyyy
  const [date, setDate] = useState<IDateRange>({ startDate: getToday(), endDate: getToday() });

  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  // todo: setter и использование!
  const [guests] = useState<IGuestsCount>({
    adult: queryParams?.adult ? Number(queryParams?.adult) : 1,
    children: queryParams?.children ? Number(queryParams?.children) : 1,
    room: queryParams?.room ? Number(queryParams?.room) : 1,
  });

  const searchHandler = () => {
    console.log("search", destination, min, max);
    const searchParams = queryString.stringify({ destination, min, max });
    navigate({
      pathname: "/search",
      search: `?${searchParams}`,
    });
  };

  const datePickerStyles: IDatesPickerStyles = {
    main: styles.lsItem,
    icon: styles.dateIcon,
    span: styles.dateText,
    range: styles.dateRange,
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
        <DatesPicker date={date} setDate={setDate} styles={datePickerStyles} />
      </div>
      <div className={styles.lsItem}>
        <label>Options</label>
        <div className={styles.lsOptions}>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>
              Min price <small>per night</small>
            </span>
            <input
              type="number"
              className={styles.lsOptionInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMin(e.target.value)}
            />
          </div>
          <div className={styles.lsOptionItem}>
            <span className={styles.lsOptionText}>
              Max price <small>per night</small>
            </span>
            <input
              type="number"
              className={styles.lsOptionInput}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMax(e.target.value)}
            />
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
      <button onClick={searchHandler}>Search</button>
    </div>
  );
};

export default SearchPanel;
