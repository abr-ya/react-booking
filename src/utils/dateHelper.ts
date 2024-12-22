import moment from "moment";
import { Range } from "react-date-range";
import { DATE_FORMAT } from "../constants";

export const createRange = (start: string, end: string) => {
  const range: Range = {
    startDate: new Date(moment(start, DATE_FORMAT).toString()),
    endDate: new Date(moment(end, DATE_FORMAT).toString()),
    key: "selection",
  };

  return range;
};

export const getToday = () => moment().format(DATE_FORMAT);

export const getDateDaysDiff = (date1: string, date2: string) => {
  const str1 = new Date(moment(date1, DATE_FORMAT).toString());
  const str2 = new Date(moment(date2, DATE_FORMAT).toString());

  return moment(str1).diff(moment(str2), "days");
};
