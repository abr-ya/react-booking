import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./search-panel.module.css";
import queryString from "query-string";
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

  // getHotels if queryParams was changed == submit form
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

  const [adult, setAdult] = useState(queryParams?.adult ? Number(queryParams.adult) : 1);
  const [children, setChildren] = useState(queryParams?.children ? Number(queryParams.children) : 1);
  const [room, setRoom] = useState(queryParams?.room ? Number(queryParams.room) : 1);

  const searchHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("search", destination, min, max, adult, children, room);
    const allParams = { destination, min, max, adult, children, room };
    const selectedParams = {};
    for (const [key, value] of Object.entries(allParams)) {
      // @ts-expect-error we use these keys!
      if (value) selectedParams[key] = value;
    }
    const searchParams = queryString.stringify(selectedParams);
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
    <form onSubmit={searchHandler}>
      <div className={styles.listSearch}>
        <h1 className={styles.lsTitle}>Search</h1>
        <div className={styles.lsItem}>
          <label>Destination</label>
          <input
            placeholder="Destination"
            type="text"
            onChange={(e) => setDestination(e.target.value)}
            value={destination as string}
          />
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
              <input
                type="number"
                min={1}
                className={styles.lsOptionInput}
                value={adult}
                onChange={(e) => setAdult(Number(e.target.value))}
              />
            </div>
            <div className={styles.lsOptionItem}>
              <span className={styles.lsOptionText}>Children</span>
              <input
                type="number"
                min={0}
                className={styles.lsOptionInput}
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
              />
            </div>
            <div className={styles.lsOptionItem}>
              <span className={styles.lsOptionText}>Room</span>
              <input
                type="number"
                min={1}
                className={styles.lsOptionInput}
                value={room}
                onChange={(e) => setRoom(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchPanel;
